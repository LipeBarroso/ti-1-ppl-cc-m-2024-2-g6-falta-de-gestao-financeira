$(document).ready(function () {
    const JSON_SERVER_URL = 'http://localhost:3000';

    function getdata(callback) {
        fetch(`${JSON_SERVER_URL}/entries`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro na rede: ' + response.status);
                }
                return response.json();
            })
            .then(entries => {
                console.log('Dados carregados:', entries);
                const dados = { entries: entries };
                if (callback) callback(dados);
            })
            .catch(erro => {
                console.error('Erro ao carregar os dados: ', erro);
                $('#valorEconomia').text('Erro ao carregar dados');
            });
    }

    function savingMonth(entries, userId) {
        if (!Array.isArray(entries)) {
            console.error('Dados inválidos: entries não é um array');
            return 0;
        }

        let receitas = 0;
        let despesas = 0;
        const mesAtual = new Date().getMonth();
        const userEntries = entries.filter(entry => entry.ownerId === userId);

        userEntries.forEach(entry => {
            try {
                const dataTransacao = new Date(parseInt(entry.date));
                if (isNaN(dataTransacao)) throw new Error('Data inválida');

                const mesTransacao = dataTransacao.getMonth();

                if (mesTransacao === mesAtual) {
                    const valor = parseFloat(entry.value) || 0;
                    if (entry.type === 'income') {
                        receitas += valor;
                    } else if (entry.type === 'expense') {
                        despesas += valor;
                    }
                }
            } catch (erro) {
                console.error('Erro ao processar entrada:', erro, entry);
            }
        });

        const valorEconomizado = receitas - despesas;
        console.log(`Usuário ${userId} - Receitas:`, receitas, 'Despesas:', despesas, 'Valor Economizado:', valorEconomizado);

        const sinal = valorEconomizado > 0 ? '+' : '';
        $('#valorEconomia').text(`${sinal}R$ ${valorEconomizado.toFixed(2)}`);

        return valorEconomizado;
    }

    function processarDadosMensais(entries, userId) {
        const meses = Array(12).fill(0).map(() => ({
            income: 0,
            expense: 0
        }));

        const userEntries = entries.filter(entry => entry.ownerId === userId);

        userEntries.forEach(entry => {
            try {
                const data = new Date(parseInt(entry.date));
                if (isNaN(data)) throw new Error('Data inválida');

                const mes = data.getMonth();
                const valor = parseFloat(entry.value) || 0;

                if (entry.type === 'income') {
                    meses[mes].income += valor;
                } else if (entry.type === 'expense') {
                    meses[mes].expense += valor;
                }
            } catch (erro) {
                console.error('Erro ao processar entrada para o gráfico:', erro, entry);
            }
        });

        return meses;
    }

    function processarGastosMensais(entries, userId) {
        const gastosPorCategoria = {};
        const mesAtual = new Date().getMonth();
        
        const userEntries = entries.filter(entry => 
            entry.ownerId === userId && 
            entry.type === 'expense' && 
            new Date(parseInt(entry.date)).getMonth() === mesAtual
        );

        fetch(`${JSON_SERVER_URL}/categories`)
            .then(response => response.json())
            .then(categories => {
                userEntries.forEach(entry => {
                    try {
                        const categoria = categories.find(cat => cat.id === entry.categoryId);
                        if (categoria) {
                            const nomeCategoria = categoria.label;
                            if (!gastosPorCategoria[nomeCategoria]) {
                                gastosPorCategoria[nomeCategoria] = 0;
                            }
                            gastosPorCategoria[nomeCategoria] += parseFloat(entry.value) || 0;
                        }
                    } catch (erro) {
                        console.error('Erro ao processar gasto:', erro, entry);
                    }
                });

                criarGraficoPizza(gastosPorCategoria);
            })
            .catch(erro => {
                console.error('Erro ao carregar categorias:', erro);
            });
    }

    function criarGrafico(dadosMensais) {
        const nomesMeses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
        
        const chartElement = document.getElementById('mensal');
        const existingChart = Chart.getChart(chartElement);
        if (existingChart) {
            existingChart.destroy();
        }

        new Chart(chartElement, {
            type: 'line',
            data: {
                labels: nomesMeses,
                datasets: [
                    {
                        label: 'Ganhos',
                        data: dadosMensais.map(mes => mes.income),
                        borderColor: 'rgb(75, 192, 192)',
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        tension: 0.1
                    },
                    {
                        label: 'Despesas',
                        data: dadosMensais.map(mes => mes.expense),
                        borderColor: 'rgb(255, 99, 132)',
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        tension: 0.1
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Receitas e Despesas Mensais'
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label) {
                                    label += ': R$ ';
                                }
                                label += context.parsed.y.toFixed(2);
                                return label;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return 'R$ ' + value.toFixed(2);
                            }
                        }
                    }
                }
            }
        });
    }

    function criarGraficoPizza(gastosPorCategoria) {
        const chartElement = document.getElementById('graficoGastos');
        const existingChart = Chart.getChart(chartElement);
        if (existingChart) {
            existingChart.destroy();
        }

        const cores = Object.keys(gastosPorCategoria).map(() => 
            `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
        );

        new Chart(chartElement, {
            type: 'pie',
            data: {
                labels: Object.keys(gastosPorCategoria),
                datasets: [{
                    data: Object.values(gastosPorCategoria),
                    backgroundColor: cores,
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: false,
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const label = context.label || '';
                                const value = context.parsed || 0;
                                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                const percentage = ((value / total) * 100).toFixed(1);
                                return `${label}: R$ ${value.toFixed(2)} (${percentage}%)`;
                            }
                        }
                    }
                }
            }
        });
    }

    const usuarioLogadoId = 1;

    getdata(function (dados) {
        savingMonth(dados.entries, usuarioLogadoId);
        const dadosMensais = processarDadosMensais(dados.entries, usuarioLogadoId);
        criarGrafico(dadosMensais);
        processarGastosMensais(dados.entries, usuarioLogadoId);
    });
});