window.addEventListener('DOMContentLoaded', () => {
    // 시간 불러오기 - 좌측상단
    const print = document.querySelector('.date');
    const getDay = () => {
        const date = new Date();
        const week = ['일', '월', '화', '수', '목', '금', '토']
        const year = date.getFullYear();
        let month = date.getMonth() + 1;
        month = month >= 10 ? month : '0' + month;
        // 숫자가 2자릿수가 아닐 때, 앞에 0을 붙인다.
        let day = date.getDate();
        day = day >= 10 ? day : '0' + day;
        const days = date.getDay();
        let h = date.getHours();
        h = h >= 10 ? h : '0' + h;
        let m = date.getMinutes();
        m = m >= 10 ? m : '0' + m;
        let s = date.getSeconds();
        s = s >= 10 ? s : '0' + s;

        print.innerHTML = `${year}.${month}.${day}. ${week[days]}요일 ${h}:${m}:${s}`;
    };
    setInterval(getDay, 1000)
    // setInterval(function () { console.log(seconds) }, 1000) -> 새로운 데이터를 받아와야 하는데, 받아온 데이터를 계속 찍고만 있다.
    // 이벤트 리스너에 콜백함수로 들어왔을때 괄호를 쳐주면 바로실행된다.


    // const 날짜함수 = () => {
    //     new Date().toTimeString().split(" ")[0];
    //     const d = new Date();
    //     const ddate = new Date(+d + 3240 * 10000).toISOString().split("T")[0]
    //     const week = ['일', '월', '화', '수', '목', '금', '토']
    //     const days = d.getDay();
    //     const time = d.toTimeString().split(" ")[0];
    //     print.innerHTML = `${ddate} ${week[days]}요일 ${time}`;
    // };
    // setInterval(날짜함수, 1000)
    // 위의 방법은 코드는 짧아지나 중간에 - 이부분 변경을 못하겠어서 일단 보류


    // 
});