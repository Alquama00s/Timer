import * as timelib from './time-library';
var timer=false;
setInterval(timelib.Current,1000);
document.getElementById('tbtn').addEventListener('click',
    function(){
        timer=true;
        var time =setInterval(timelib.timer,1000);
        var animate=setInterval(timelib.animate_sep,500);
    }
);