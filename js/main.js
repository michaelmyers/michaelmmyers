

$(document).ready(function() {
    $.fn.fullpage({
        slidesColor: ['#34495e', '#34495e', '#34495e'],
        anchors: ['home', 'about', 'novum-io', 'robopogo'],//, 'dc-transit'],
        verticalCentered: false,
        resize: false
    });
});

$(document).ready(function () {

    //Simple client side counter

    $.get("http://api.novum.io/channels/14009396295?amount=1", function(data) {
        console.log('Data retrieved ' + data[0].data);
        //console.log(data);
    });

    var windowHeight = $(window).height();
    var windowWidth = $(window).width();

    console.log('Window Height: ' + windowHeight + ' Window Width: ' + windowWidth);

    $('#waterMark').attr('Width', windowWidth);
    $('#waterMark').attr('Height', windowHeight);

    var canvas = document.getElementById('waterMark');
    var c = canvas.getContext('2d');

    var startX = windowWidth * .75;
    var startY = 0;
    var endX = startX;
    var endY = windowHeight * .69;

    var amount = 0;

    var drawing = setInterval(function() {
        amount += 0.015; // change to alter duration
        if (amount > 1) {
            amount = 1;
            console.log('Clearing Draw');
            clearInterval(drawing);
        }
        c.clearRect(0, 0, canvas.width, canvas.height);
        c.strokeStyle = '#2c3e50';
        c.lineWidth = 8;
        c.moveTo(startX, startY);
        // lerp : a  + (b - a) * f
        c.lineTo(startX + (endX - startX) * amount, startY + (endY - startY) * amount);
        c.stroke();

    }, 30);

    var startXTwo = startX + 15;
    var startYTwo = 0;
    var endXTwo = startXTwo;
    var endYTwo = windowHeight * .78;

    var amountTwo = 0;

    setTimeout(function () {
        var drawingTwo = setInterval(function() {
            amountTwo += 0.015; // change to alter duration
            if (amountTwo > 1) {
                amountTwo = 1;
                console.log('Clearing DrawTwo');
                clearInterval(drawingTwo);
            }
            c.clearRect(0, 0, canvas.width, canvas.height);
            c.strokeStyle = '#2c3e50';
            c.lineWidth = 8;
            c.moveTo(startXTwo, startYTwo);
            // lerp : a  + (b - a) * f
            c.lineTo(startXTwo + (endXTwo - startXTwo) * amountTwo, startYTwo + (endYTwo - startYTwo) * amountTwo);
            c.stroke();

        }, 30);

    }, 800);

});