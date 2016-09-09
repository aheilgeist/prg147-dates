var $ = function (id) {
    return document.getElementById(id);
}

var date = new Date();
var day =  date.getDate();
var month = date.getMonth() + 1  //0 is january;
var year = date.getFullYear();
var agemonth=0;
var ageyear=0;

function setTheDate(){

    $("today").value = month + "/" + day + "/" + year;
}
function calculate(){
    var today = new Date(("today").value);
    var specialdate = $("specialdate").value;
    var bmonth = (parseInt(specialdate.substring(0,2)));
    var byear = (parseInt(specialdate.substring(6,10)));

    if (bmonth > month)
    {
        ageyear = year - byear -1;
        agemonth = 12 - bmonth + month;
    }
    else
    {
        ageyear = year - byear;
        agemonth = month - bmonth;
    }
    $("reply").value = "Your special date was " + ageyear + " years and " + agemonth +" months ago";
}


/*This code presents a phrase for each day of the week according to what day it is*/
function dayGreet()
{
    var dateStatement = "";
    var d = new Date();
    var todayIs = d.getDay();

    switch (todayIs)
    {
        case 0:
        case 6:
            dateStatement = "There should be one more day between Saturday and Sunday";
            break;
        case 1:
            dateStatement = "Ughh...It's Monday";
        case 2:
            dateStatement = "Well at least it's Tuesday";
            break;
        case 3:
            dateStatement = "Wow! It's already Wednesday";
            break;
        case 4:
            dateStatement = "Good news...tomorrow is Friday";
            break;
        case 5:
            dateStatement = "TGIF!!!";
            break;
        default:
            dateStatement = "no one should ever see this one";
    }
    document.getElementById("myday").innerHTML =dateStatement;
}


/*Function to calculate days until New Years*/
function daysToNewYear(){

    var today = new Date();

    $("todaysdate").innerHTML = today.toDateString();

    var newYear = new Date("01/01/2017");
    $("newYearDate").innerHTML = newYear.toDateString();

    if (today < newYear){
        var timeDiff = Math.abs(newYear.getTime() - today.getTime());
        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        $("daysleft").innerHTML = diffDays;

    }
    else {
        $("daysleft").innerHTML = "Hmmm....What happened?"
    }
}

window.onload = function()
{
    dayGreet();
    daysToNewYear();
    setTheDate();
    $("specialdate").value="mm/dd/yyyy"

    $("age").onclick = calculate;
}