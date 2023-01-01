    function actualDate() {

    let day, dayOfTheWeek, month, year, hora, minutes, seconds, dayOfWeek, arrayOfDays;

    const dateComplete = new Date();

    day = dateComplete.getDate();
    month = dateComplete.getMonth() + 1;
    year = dateComplete.getFullYear();
    hora = dateComplete.getHours();
    minutes = dateComplete.getMinutes();
    seconds = dateComplete.getSeconds();
    dayOfTheWeek = dateComplete.getDay();
    day = (day < 10) ? '0' + day : day;
    month = (month < 10) ? '0' + month : month;
    seconds = (seconds < 10) ? '0' + seconds : seconds;
    hora = (hora < 10) ? '0' + hora : hora;
    minutes = (minutes < 10) ? '0' + minutes : minutes;

    arrayOfDays = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

    dayOfWeek = arrayOfDays[dayOfTheWeek];

    document.getElementById('actualDate').innerHTML = day + "-" + month + "-" + year + " " + dayOfWeek + " " + hora + ":" + minutes + ":" + seconds;

}

    actualDate();

    setInterval(actualDate, 0.001);
