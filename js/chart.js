// 사용한것 : https://www.chartjs.org/docs/latest/getting-started/
// import { Interaction } from 'chart.js';
// import { getRelativePosition } from 'chart.js/helpers';
// 바로 위에 두개의 import는 커스텀모드를 사용할 때 필요함

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

    // 아래는 툴팁과
    const getOrCreateTooltip = (chart) => {
        let tooltipEl = chart.canvas.parentNode.querySelector('div');

        if (!tooltipEl) {
            tooltipEl = document.createElement('div');
            tooltipEl.style.background = 'rgba(0, 0, 0, 0.7)';
            tooltipEl.style.borderRadius = '3px';
            tooltipEl.style.color = 'white';
            tooltipEl.style.opacity = 1;
            tooltipEl.style.pointerEvents = 'none';
            tooltipEl.style.position = 'absolute';
            tooltipEl.style.transform = 'translate(-50%, 0)';
            tooltipEl.style.transition = 'all .1s ease';

            const table = document.createElement('table');
            table.style.margin = '2px';

            tooltipEl.appendChild(table);
            chart.canvas.parentNode.appendChild(tooltipEl);
        }

        return tooltipEl;
    };
    // 툴팁 핸들러 입니다!!
    const externalTooltipHandler = (context) => {
        // Tooltip Element
        const { chart, tooltip } = context;
        const tooltipEl = getOrCreateTooltip(chart);

        // Hide if no tooltip
        if (tooltip.opacity === 0) {
            tooltipEl.style.opacity = 0;
            return;
        }

        // Set Text
        if (tooltip.body) {
            const titleLines = tooltip.title || [];
            const bodyLines = tooltip.body.map(b => b.lines);

            const tableHead = document.createElement('thead');

            titleLines.forEach(title => {
                const tr = document.createElement('tr');
                tr.style.borderWidth = 0;

                const th = document.createElement('th');
                th.style.borderWidth = 0;
                const text = document.createTextNode(title);

                th.appendChild(text);
                tr.appendChild(th);
                tableHead.appendChild(tr);
            });

            const tableBody = document.createElement('tbody');
            bodyLines.forEach((body, i) => {
                const colors = tooltip.labelColors[i];

                const span = document.createElement('span');
                span.style.background = colors.backgroundColor;
                span.style.borderColor = colors.borderColor;
                span.style.borderWidth = '2px';
                span.style.marginRight = '10px';
                span.style.height = '10px';
                span.style.width = '10px';
                span.style.display = 'inline-block';

                const tr = document.createElement('tr');
                tr.style.backgroundColor = 'inherit';
                tr.style.borderWidth = 0;

                const td = document.createElement('td');
                td.style.borderWidth = 0;

                const text = document.createTextNode(body);

                td.appendChild(span);
                td.appendChild(text);
                tr.appendChild(td);
                tableBody.appendChild(tr);
            });

            const tableRoot = tooltipEl.querySelector('table');

            // Remove old children
            while (tableRoot.firstChild) {
                tableRoot.firstChild.remove();
            }

            // Add new children
            tableRoot.appendChild(tableHead);
            tableRoot.appendChild(tableBody);
        }

        const { offsetLeft: positionX, offsetTop: positionY } = chart.canvas;

        // Display, position, and set styles for font
        tooltipEl.style.opacity = 1;
        tooltipEl.style.left = positionX + tooltip.caretX + 'px';
        tooltipEl.style.top = positionY + tooltip.caretY + 'px';
        tooltipEl.style.font = tooltip.options.bodyFont.string;
        tooltipEl.style.padding = tooltip.options.padding + 'px ' + tooltip.options.padding + 'px';
        // 아래처럼 툴팁박스 안에 들어있는 폰트 스타일을 지정해주면 됨!
        tooltipEl.style.fontSize = '14px';
        tooltipEl.style.fontWeight = '200';
        tooltipEl.style.lineHeight = '1.2';
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            maxBarThickness: '16',
            // 막대 최대 굵기 지정으로 링크에 다른 옵션도 있음 : https://www.chartjs.org/docs/latest/charts/bar.html#maxbarthickness
            interaction: {
                mode: 'index'
            },
            plugins: {
                // legend: {
                //     display: false, // 어떤 항목에 속성 들어갈때는 이렇게 중괄호 해주고 안에 넣어줘야함!!
                // },
                legend: false, // 위쪽에 라벨 뜨는거 안뜨게 해줌
                // tooltip: false,
                tooltip: {
                    // 여기에 호버한 내용 바뀌게 할 예정
                    enabled: false, // 기존 툴팁(tooltip)을 안나오게 한 이후에 아래 내용으로 수정해주는 방식임
                    position: 'nearest',
                    external: externalTooltipHandler, // 위쪽에 만든 js 스타일을 가져옴! 이부분 너무 헷갈렸는데, 알고보니 순서 문제였음
                    // font: {
                    //     size: 20,
                    // }, // html의 기본 사이즈(현재 main.css에선 10px)를 적용한다는데.. 표 안에서만 따로 적용하게 하려면 위에있는 핸들러에서 툴팁 폰트 스타일을 지정해주면 됨

                    // 툴팁 안에 들어가는 내용 수정하는 방법인데, 우선 보류..
                    // callbacks: {
                    //     label: function (context) {
                    //         let label = context.dataset.label || '';

                    //         if (label) {
                    //             label += ': ';
                    //         }
                    //         if (context.parsed.y !== null) {
                    //             label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
                    //         }
                    //         return label;
                    //     },
                    // },
                    // 툴팁 안에 내용 콜백 관련 https://www.chartjs.org/docs/latest/configuration/tooltip.html#tooltip-callbacks
                    // 상세한 설명과 사용은 이쪽으로 https://www.chartjs.org/docs/latest/configuration/tooltip.html#label-callback
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
                    // title: {
                    //     color: '#fff',
                    //     display: true,
                    //     text: 'hour',
                    //     align: 'end',
                    // },
                    // 기준을 적어주려고 했지만.. 위치가 마음처럼 안움직여서 따로 div를 만들어서 적어주기로 함
                }
            },
        },
    };  // 기초 틀




    const myChart = new Chart(
        document.getElementById('myChart'),
        config
    );  // 집어서 넣어줌


});