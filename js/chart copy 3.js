// 사용한것 : https://www.chartjs.org/docs/latest/getting-started/

window.addEventListener('DOMContentLoaded', () => {

    // 옵션
    // const labels = [
    //     '1',
    //     '2',
    //     '3',
    //     '4',
    //     '5',
    //     '6',
    //     '7',
    //     '8',
    //     '9',
    //     '10',
    //     '11',
    //     '12',
    //     '13',
    //     '14',
    //     '15',
    //     '16',
    //     '17',
    //     '18',
    //     '19',
    //     '20'
    // ]; // 이거는 수동으로 쓰는 방법

    const DATA_COUNT = 21;
    const labels = [];
    for (let i = 1; i < DATA_COUNT; ++i) {
        labels.push(i.toString());
    };

    const data = {
        labels: labels,
        datasets: [{
            label: 'kW',
            backgroundColor: '#2192f0',
            borderColor: '#2192f0',
            data: [160, 190, 320, 300, 100, 360, 350, 180, 390, 60, 110, 210, 195, 20],
            borderWidth: 0,
        }],
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            plugins: {
                // legend: {
                //     display: false, // 어떤 항목에 속성 들어갈때는 이렇게 중괄호 해주고 안에 넣어줘야함!!
                // },
                legend: false, // 위쪽에 라벨 뜨는거 안뜨게 해줌
                // tooltip: false,
                tooltip: {
                    // 여기에 호버한 내용 바뀌게 할 예정
                    // enabled: false, // 기존 툴팁(tooltip)을 안나오게 한 이후에 아래 내용으로 수정해주는 방식임
                    font: {
                        size: 20,
                    }, // 일단 이렇게 적어봤지만 적용이 안됨.
                },
            },
            maintainAspectRatio: false, // 차트의 width, height 값을 비율을 유지하지 않은 채로 변경 가능하게 함(기본값 true)
            // events: ['click'], // 클릭 해야지만 수치가 보임(hover 대체), none 으로 하면 아예 안뜸
            scales: {
                y: {
                    min: 0,
                    max: 800,
                    grid: {
                        color: '#353a4d',
                        borderDash: [3, 4],
                        borderColor: '#2f3243',
                        drawTicks: false,
                    },
                    ticks: {
                        color: '#fff',
                        stepSize: 200,
                        font: {
                            family: "'Pretendard', sans-serif", // 기존 폰트에는 수치가 없기 때문에 font-family를 먼저 지정해줘야 font-weight를 변경 가능하다.
                            weight: '200',
                            size: 13,
                        },
                    },
                },
                x: {
                    grid: {
                        display: false,
                        borderColor: '#2f3243',
                    },
                    ticks: {
                        color: '#fff',
                        font: {
                            family: "'Pretendard', sans-serif",
                            weight: '200',
                            size: 13,
                        },
                    },
                    title: {
                        color: '#fff',
                        display: true,
                        text: 'hour',
                        align: 'end',
                    },
                }
            },
        },
    };  // 기초 틀



    const myChart = new Chart(
        document.getElementById('myChart'),
        config
    );  // 집어서 넣어줌


});