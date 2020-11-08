function animateClock(span)
{
    span.className="turn";
    setTimeout(function(){
            span.className="";
    },700);
}
function updateTimer(deadline)
{
    var time=deadline-new Date();

    return {
        'days':Math.floor(time/(1000*60*60*24)),
        'hours':Math.floor((time/(1000*60*60))%24),
        'minutes':Math.floor((time/(1000*60))%60),
        'seconds':Math.floor((time/(1000))%60),
        'total':time
    };
}
function startTimer(id,deadline)
{
var timerInterval=setInterval(function(){
var clock=document.getElementById(id);
var timer=updateTimer(deadline);
if(timer.total>=86400000){
clock.innerHTML='<span> '+timer.days+' </span>'
+'<span> '+timer.hours+' </span>'
+'<span> '+timer.minutes+'</span>'
+'<span> '+timer.seconds+' </span>';
document.getElementById('units').innerHTML='    <span>Days</span><span>Hours</span><span>Minutes</span><span>Seconds</span>';
var spans=clock.getElementsByTagName('span');

animateClock(spans[3]);
if(timer.seconds==59)animateClock(spans[2]);
if(timer.minutes==59)animateClock(spans[1]);
if(timer.hours==23&&timer.minutes==59&&timer.seconds==59)animateClock(spans[0]);
}
if(timer.total<86400000){
    clock.innerHTML='<span> '+timer.hours+' </span>'
    +'<span> '+timer.minutes+'</span>'
    +'<span> '+timer.seconds+' </span>';
    document.getElementById('units').innerHTML=' <span>Hours</span><span>Minutes  </span><span> Seconds</span>';
    var spans=clock.getElementsByTagName('span');
    
    animateClock(spans[2]);
    if(timer.seconds==59)animateClock(spans[1]);
    if(timer.minutes==59)animateClock(spans[0]);
    document.getElementById("clock").className="threeformat";
    document.getElementById("units").className="threeformats";

}
    

//for checking the time end then what to do
if(timer.total<1)
{
    clearInterval(timerInterval);
    clock.innerHTML="<span>0</span><span>0</span><span>0</span>";
    
}
},1000);
}
window.onload=function()
{
    var deadline=new Date("Dec 16, 2020 00:00:00");
    startTimer("clock",deadline);   
}