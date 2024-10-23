$(document).ready(function () {
    // Função para buscar dados do arquivo JSON
    function getdata(callback) {
        fetch('./db/teste.json')  // Busca o arquivo JSON
        .then(response => response.json())  
        .then(dados => {
            console.log('Dados carregados:', dados);  // Log dos dados carregados
            criarGrafico(dados.labels, dados.data);  // Mantém o gráfico sendo criado
            if (callback) callback(dados);  // Chama o callback passando os dados
        })
        .catch(erro => console.error('Erro ao carregar os dados: ', erro));
    }

    function savingMonth(entries) {
        let receitas = 0;
        let despesas = 0;
        const mesAtual = new Date().getMonth();  // Pega o mês atual

        // Filtra as entradas do mês atual
        entries.forEach(entry => {
            const dataTransacao = new Date(parseInt(entry.date));  // Converte a data de string para número
            const mesTransacao = dataTransacao.getMonth();  // Extrai o mês

            if (mesTransacao === mesAtual) {
                if (entry.type === 'income') {
                    receitas += entry.value;  // Soma o valor das receitas
                } else if (entry.type === 'expense') {
                    despesas += entry.value;  // Soma o valor das despesas
                }
            }
        });

        // Calcula e exibe o valor economizado
        const valorEconomizado = receitas - despesas;
        console.log('Receitas:', receitas, 'Despesas:', despesas, 'Valor Economizado:', valorEconomizado);  // Log dos valores calculados
        $('#valorEconomia').text(`+R$ ${valorEconomizado.toFixed(2)}`);  // Exibe o valor economizado formatado
        return valorEconomizado;
    }

    // Executa ao clicar no botão "Evolução"
    $('#evolução').click(function () {
        $('.evolução').show();
        $('.meta').hide();
    });

    $('.row button').click(function () {
        $('.row button').removeClass('selecionado');
        $(this).addClass('selecionado');
    });

    $('#metas').click(function () {
        window.location.href = 'index.html';
    });

    // Call getdata and pass a callback to use savingMonth
    getdata(function(dados) {
        savingMonth(dados.entries);
    });
});
