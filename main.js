canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d")
function olympicLogo() {
    var lineWidth = document.getElementById("lineWidth").value;
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 1;
    ctx.rect(150, 143, 380, 200);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.lineWidth = lineWidth;
    ctx.arc(240, 210, 40 ,0 , 2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "yellow";
    ctx.lineWidth = lineWidth;
    ctx.arc(290, 250, 40 ,0 , 2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = lineWidth;
    ctx.arc(340, 210, 40 ,0 , 2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.lineWidth = lineWidth;
    ctx.arc(390, 250, 40 ,0 , 2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = lineWidth;
    ctx.arc(440, 210, 40 ,0 , 2 * Math.PI);
    ctx.stroke();
}
function clearArea() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}