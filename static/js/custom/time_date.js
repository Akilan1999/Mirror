function time_date(){
    var d = new Date();
    document.getElementById("time").innerHTML = d.getHours() + ':' + d.getMinutes() ;
    document.getElementById("date").innerHTML = d.getDate() + '/' + d.getMonth() + '/' + d.getFullYear();
    setTimeout(time_date,1000);
}

time_date();