var lat;
var long;

function MyLocTime() {
    var time = new Date();
    var timestring = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
    document.getElementById('World-Clock').innerHTML = timestring;
    setTimeout(MyLocTime, 1000);
}

function NYTime() {
    document.getElementById('World-Clock').innerHTML = "New York Time";
}

function TokyoTime() {
    var time = new Date().toLocaleDateString("en-US", {timeZone: "Asia/Tokyo"});
    document.getElementById('World-Clock').innerHTML = time;
}

function ReykjavikTime() {
    document.getElementById('World-Clock').innerHTML = "Reykjavik Time";
}