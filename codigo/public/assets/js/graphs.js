$(document).ready(function () {
    
    $('.row button').click(function () {
        $('.row button').removeClass('selecionado');
        $(this).addClass('selecionado');
    });

    $('#evolução').click(function () {
        $('.evolução').show();
        $('.meta').hide();
    });

    $('#metas').click(function () {
        window.location.href = 'index.html';

    });

    
    
    
    
    
    
    
    /*
    // Dados iniciais em JSON para o primeiro gráfico
    let dados1 = {
        labels: ['Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set'],
        datasets: [{
            label: 'Economia Mensal',
            data: [1200, 1500, 1800, 900, 1600, 1662],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    };

    // Configuração do gráfico 1 (gráfico de linha)
    let config1 = {
        type: 'line', // Pode mudar para 'bar', 'pie', etc.
        data: dados1,
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };

    // Criação do gráfico 1
    let grafico1 = new Chart(
        document.getElementById('mensal'),
        config1
    );

    // Função para atualizar o gráfico 1 com novos dados via JSON
    function atualizarGrafico1(novosDados) {
        // Atualizando os dados do gráfico
        grafico1.data.datasets[0].data = novosDados;
        // Atualizando o gráfico
        grafico1.update();
    }

    // Exemplo de atualização dos dados com jQuery e JSON para o gráfico 1
    let novosDados1 = [1600, 1700, 1400, 1900, 1800, 2000];
    setTimeout(function () {
        atualizarGrafico1(novosDados1);
    }, 2000); // Atualiza após 2 segundos (simulação)

    // Dados iniciais para o segundo gráfico (gráfico de pizza)
    let dados2 = {
        labels: ['Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set'],
        datasets: [{
            label: 'Distribuição',
            data: [300, 500, 100, 200, 400, 300],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    };

    // Configuração do gráfico 2 (gráfico de pizza)
    let config2 = {
        type: 'pie',
        data: dados2,
        options: {
            responsive: true
        }
    };

    // Criação do gráfico 2
    let grafico2 = new Chart(
        document.getElementById('graficPizza'),
        config2
    );

    // Função para atualizar o gráfico 2 com novos dados via JSON
    function atualizarGrafico2(novosDados2) {
        // Atualizando os dados do gráfico 2
        grafico2.data.datasets[0].data = novosDados2;
        // Atualizando o gráfico
        grafico2.update();
    }

    // Exemplo de atualização dos dados com jQuery e JSON para o gráfico 2
    let novosDados2 = [500, 400, 300, 200, 100, 600];
    setTimeout(function () {
        atualizarGrafico2(novosDados2);
    }, 2000); // Atualiza após 2 segundos (simulação)
    */
});
