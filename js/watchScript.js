const getHour = () =>{
    const time = new Date();
    document.querySelector("#watch").innerHTML =
    time.getHours() + ' : ' +
    time.getMinutes() + ' : ' +
    time.getSeconds();
}

setInterval(getHour, 1000);