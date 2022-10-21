window.addEventListener('DOMContentLoaded', () => {
    var opts1 = {
        angle: 0, // The span of the gauge arc
        lineWidth: 0.46, // The line thickness
        radiusScale: 1.05, // Relative radius
        pointer: {
            length: 0.62, // // Relative to gauge radius
            strokeWidth: 0, // The thickness
            color: '#000000' // Fill color
        },
        limitMax: false,     // If false, max value increases automatically if value > maxValue
        limitMin: false,     // If true, the min value of the gauge will be fixed
        colorStart: '#2192f0',   // Colors
        colorStop: '#2192f0',    // just experiment with them
        strokeColor: '#353a4d',  // to see which ones work best for you
        generateGradient: true,
        highDpiSupport: true,     // High resolution support
        // renderTicks is Optional
        renderTicks: {
            divisions: 1,
            divWidth: 0.1,
            divLength: 1,
            divColor: '#353a4d',
            subDivisions: 10,
            subLength: 0.2,
            subWidth: 0.7,
            subColor: '#353a4d'
        },
        staticLabels: {
            font: "10px pretendard",  // Specifies font
            labels: [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],  // Print labels at these values
            color: "#ddd",  // Optional: Label text color
            fractionDigits: 0,  // Optional: Numerical precision. 0=round off.
        },

    };
    var target1 = document.getElementById('gauge01'); // your canvas element
    var gauge1 = new Gauge(target1).setOptions(opts1); // create sexy gauge!
    gauge1.maxValue = 1000; // set max gauge value
    gauge1.setMinValue(0);  // Prefer setter over gauge.minValue = 0
    gauge1.animationSpeed = 40; // set animation speed (32 is default value)
    gauge1.set(650); // set actual value

    // gauge.set(값)을 받아와서 textfield에 value로 주고, html에 보이게 해야함!
    // let textfield = document.querySelector('#textfield');
    // textfield.value = gauge.set.value;
    // console.log(gauge);
    // 모르겠다 :),.,...



    var opts2 = {
        angle: 0, // The span of the gauge arc
        lineWidth: 0.46, // The line thickness
        radiusScale: 1.05, // Relative radius
        pointer: {
            length: 0.62, // // Relative to gauge radius
            strokeWidth: 0, // The thickness
            color: '#000000' // Fill color
        },
        limitMax: false,     // If false, max value increases automatically if value > maxValue
        limitMin: false,     // If true, the min value of the gauge will be fixed
        colorStart: '#2192f0',   // Colors
        colorStop: '#89d223',    // just experiment with them
        strokeColor: '#353a4d',  // to see which ones work best for you
        generateGradient: true,
        highDpiSupport: true,     // High resolution support
        // renderTicks is Optional
        renderTicks: {
            divisions: 1,
            divWidth: 0.1,
            divLength: 1,
            divColor: '#353a4d',
            subDivisions: 10,
            subLength: 0.2,
            subWidth: 0.7,
            subColor: '#353a4d'
        },
        staticLabels: {
            font: "10px pretendard",  // Specifies font
            labels: [0, 600, 1200, 1800, 2400, 3000, 3600, 4200, 4800, 5400, 6000],  // Print labels at these values
            color: "#ddd",  // Optional: Label text color
            fractionDigits: 0,  // Optional: Numerical precision. 0=round off.
        },

    };
    var target2 = document.getElementById('gauge02'); // your canvas element
    var gauge2 = new Gauge(target2).setOptions(opts2); // create sexy gauge!
    gauge2.maxValue = 6000; // set max gauge value
    gauge2.setMinValue(0);  // Prefer setter over gauge.minValue = 0
    gauge2.animationSpeed = 40; // set animation speed (32 is default value)
    gauge2.set(1019.1); // set actual value
});