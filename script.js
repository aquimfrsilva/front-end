document.addEventListener('DOMContentLoaded', function () {
    // Dados para o gráfico de barras (exemplo)
    var data = {
        labels: ['Categoria 1', 'Categoria 2', 'Categoria 3', 'Categoria 4', 'Categoria 5'],
        datasets: [{
            label: 'Quantidade',
            backgroundColor: 'rgba(75, 192, 192,0.2) ',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            data: [12, 19, 3, 5, 2]
        }]
    };

    // Configurações do gráfico
    var options = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    // Obtém o elemento do canvas
    var ctx = document.getElementById('barChart').getContext('2d');

    // Criação do gráfico de barras
    var myBarChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    });
});