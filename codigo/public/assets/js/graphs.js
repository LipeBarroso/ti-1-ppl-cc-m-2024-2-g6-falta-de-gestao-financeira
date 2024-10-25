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
                // Adaptando o formato para manter compatibilidade com o código existente
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

        // Filtra entradas pelo userId antes de processar
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

    function criarGrafico(dados, userId) {
        // Filtra as entradas do usuário
        const userEntries = dados.entries.filter(entry => entry.ownerId === userId);

        // Processa os dados para o gráfico
        const processarDadosMensais = () => {
            const meses = Array(12).fill(0).map((_, i) => {
                return {
                    income: 0,
                    expense: 0
                };
            });

            userEntries.forEach(entry => {
                const data = new Date(parseInt(entry.date));
                const mes = data.getMonth();
                const valor = parseFloat(entry.value) || 0;

                if (entry.type === 'income') {
                    meses[mes].income += valor;
                } else if (entry.type === 'expense') {
                    meses[mes].expense += valor;
                }
            });

            return meses;
        };

        const dadosMensais = processarDadosMensais();
        console.log(`Dados mensais do usuário ${userId}:`, dadosMensais);
    }

    const usuarioLogadoId = 1;

    getdata(function (dados) {
        savingMonth(dados.entries, usuarioLogadoId);
        criarGrafico(dados, usuarioLogadoId);
    });


    new Chart(
        document.getElementById('mensal'),
        {
          type: 'line',
          data: {
            labels: data.map(row => row.year),
            datasets: [
              {
                label: 'Acquisitions by year',
                data: data.map(row => row.count)
              }
            ]
          }
        }
      );
});