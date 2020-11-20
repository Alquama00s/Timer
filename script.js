var currtimer = [
    document.getElementById('chours'),
    document.getElementById('cminutes'),
    document.getElementById('cseconds'),
    document.getElementsByClassName('csep')
];
var timer = [
    document.getElementById('thours'),
    document.getElementById('tminutes'),
    document.getElementById('tseconds'),
    document.getElementsByClassName('tsep')
];
var i=1,j=1;
var time = [0, 25, 1];
function Current() {
    var time = new Date();
    currtimer[0].innerHTML = time.getHours();
    currtimer[1].innerHTML = time.getMinutes();
    currtimer[2].innerHTML = time.getSeconds();
    if (i == 1) {
        currtimer[3][0].innerHTML = "";
        currtimer[3][1].innerHTML = "";
        i = 0;
    }
    else {
        currtimer[3][0].innerHTML = ":";
        currtimer[3][1].innerHTML = ":";
        i = 1;
    }
}
function animate_sep() {
    if (j == 1) {
        timer[3][0].innerHTML = "";
        timer[3][1].innerHTML = "";
        j = 0;
    }
    else {
        timer[3][0].innerHTML = ":";
        timer[3][1].innerHTML = ":";
        j = 1;
    }
}
function runtimer() {
    time[2]--;
    if (time[2] == 0) {
        if (time[1] != 0) {
            time[1]--;
            time[2] = 60;
        }
    }
    if (time[1] == 0) {
        if (time[0] != 0) {
            time[0]--;
            time[1] = 60;
        }
    }
    if (time[0] + time[1] + time[2] <= 0) {
        time = [0, 25, 1];
        timer[0].innerHTML = "--";
        timer[1].innerHTML = "--";
        timer[2].innerHTML = "--";
        clearInterval(runtimer);
    }else{
    timer[0].innerHTML = time[0];
    timer[1].innerHTML = time[1];
    timer[2].innerHTML = time[2];}
}
///--------------------------------------------
var start=false;
var runtime,animate;
setInterval(Current,1000);
document.getElementById('tbtn').addEventListener('click',
    function(){
        if(!start){
        start=true;
        document.getElementById('tbtn').innerHTML='<span class="normtext">Pause</span>';
        runtime =setInterval(runtimer,1000);
        animate=setInterval(animate_sep,500);
        }else
        {
            start=false;
            document.getElementById('tbtn').innerHTML='<span class="normtext">Start</span>';
            clearInterval(runtime);
            clearInterval(animate);
        }
    }
);