// 사용한것 : https://www.chartjs.org/docs/latest/getting-started/

window.addEventListener('DOMContentLoaded', () => {

    // 옵션
    const labels = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20'
    ];

    const data = {
        labels: labels,
        datasets: [{
            label: 'My First dataset',
            backgroundColor: '#2192f0',
            borderColor: '#2192f0',
            data: [160, 190, 320, 300, 100, 360, 350, 180, 390, 60, 110, 210, 195, 20],
            borderWidth: 0,
        }]
    };


    const config = {
        type: 'bar',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        },
    };  // 기초 틀

    const myChart = new Chart(
        document.getElementById('myChart'),
        config
    );  // 집어서 넣어줌


});