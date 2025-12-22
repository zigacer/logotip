window.onload = function () {

    // get canvas
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    let logoColor = "white";

    function drawLogo() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.scale(1.0, 1.0);
        ctx.lineWidth = 1;
        ctx.strokeStyle = logoColor;
        ctx.fillStyle = logoColor;

        ctx.beginPath();

        ctx.moveTo(16, 5.4);
        ctx.bezierCurveTo(14.1, 4.3, 11.9, 3.5, 9.5, 3.2);
        ctx.bezierCurveTo(8.6, 3.2, 8.0, 3.3, 7.5, 3.6);
        ctx.bezierCurveTo(9.9, 2.0, 12.8, 1.0, 16.0, 1.0);
        ctx.bezierCurveTo(19.2, 1.0, 22.1, 2.0, 24.5, 3.6);
        ctx.bezierCurveTo(23.4, 3.2, 22.8, 3.2, 22.6, 3.2);
        ctx.bezierCurveTo(20.1, 3.5, 17.9, 4.3, 16.0, 5.4);
        ctx.closePath();

        ctx.moveTo(5.6, 5.3);
        ctx.bezierCurveTo(2.7, 8.0, 1.0, 11.8, 1.0, 16.0);
        ctx.bezierCurveTo(1.0, 19.6, 2.2, 22.9, 4.3, 25.5);
        ctx.bezierCurveTo(2.6, 22.2, 8.8, 13.0, 11.9, 9.3);
        ctx.bezierCurveTo(8.4, 5.8, 6.6, 5.2, 5.6, 5.3);
        ctx.closePath();

        ctx.moveTo(20.1, 9.3);
        ctx.bezierCurveTo(23.2, 13.0, 29.5, 22.2, 27.7, 25.4);
        ctx.bezierCurveTo(29.8, 22.9, 31.0, 19.6, 31.0, 16.0);
        ctx.bezierCurveTo(31.0, 11.8, 29.3, 8.0, 26.6, 5.3);
        ctx.closePath();

        ctx.moveTo(6.1, 27.3);
        ctx.bezierCurveTo(8.7, 29.6, 12.2, 31.0, 16.0, 31.0);
        ctx.bezierCurveTo(19.8, 31.0, 23.3, 29.6, 25.9, 27.3);
        ctx.bezierCurveTo(28.2, 24.9, 20.5, 16.4, 16.0, 13.0);
        ctx.bezierCurveTo(11.5, 16.4, 3.8, 24.9, 6.1, 27.3);
        ctx.closePath();

        ctx.fill();
        ctx.stroke();
    }

    drawLogo();

    document.getElementById("colorInput").addEventListener("change", function() {
        logoColor = this.value;
        drawLogo();
    });
};
