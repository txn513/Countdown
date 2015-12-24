var oYear = document.getElementById('inputYear');
var oMonth = document.getElementById('inputMonth');
var oDay = document.getElementById('inputDay');
var oSet = document.getElementById('set');
var oReset = document.getElementById('reset');

var timer = null;
var dateTime = null;

oSet.onclick = function (){
    dateTime = oYear.value + "," + oMonth.value+ "," + oDay.value;
    if(!oYear.value){
        alert("请输入年");
    }
    else if(!oMonth.value){
        alert("请输入月");
    }
    else if(!oDay.value){
        alert("请输入日");
    }
    else{
        getLeftTime();
        timer = setInterval(getLeftTime, 500);
    }
}

oReset.onclick = function (){
    clearTimeout(timer);
    document.getElementById('date').innerHTML = 0 + '<span>天 </span> ' + 0 + '<span>小时 </span>' +
        0 +'<span>分钟 </span> ' + 0 + '<span>秒 </span>';

}

function getLeftTime (){
    var currentDate = new Date();
    var endDate = new Date(dateTime);

    var leftTime = endDate.getTime() - currentDate.getTime();

    //总秒数转天数、小时、分钟、秒
    var leftDay = Math.floor(leftTime/(24*60*60*1000));
    var leftHour = Math.floor((leftTime - leftDay*(24*60*60*1000)) / (60*60*1000));
    var leftMin = Math.floor((leftTime - ((leftDay*(24*60*60*1000))+(leftHour*(60*60*1000))))/(60*1000));
    var leftSec = Math.floor((leftTime - ((leftDay*(24*60*60*1000))+(leftHour*(60*60*1000))+
        (leftMin*(60*1000))))/ 1000);

    //输出到div
    document.getElementById('date').innerHTML = leftDay + '<span>天 </span> ' + checkTime(leftHour) + '<span>小时 </span>' +
        checkTime(leftMin) +'<span>分钟 </span> ' + checkTime(leftSec) + '<span>秒 </span>';

    //检查位数 一位数前面添加0
    function checkTime (i){
        return i < 10 ? '0'+ i : i;
    }
}