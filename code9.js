gdjs.clockCode = {};
gdjs.clockCode.GDAvezzoLogoObjects1= [];
gdjs.clockCode.GDAvezzoLogoObjects2= [];
gdjs.clockCode.GDPopUpObjects1= [];
gdjs.clockCode.GDPopUpObjects2= [];
gdjs.clockCode.GDBackgroundObjects1= [];
gdjs.clockCode.GDBackgroundObjects2= [];
gdjs.clockCode.GDNotificationBTNObjects1= [];
gdjs.clockCode.GDNotificationBTNObjects2= [];
gdjs.clockCode.GDProfilePicSmallObjects1= [];
gdjs.clockCode.GDProfilePicSmallObjects2= [];
gdjs.clockCode.GDBottomContainterObjects1= [];
gdjs.clockCode.GDBottomContainterObjects2= [];
gdjs.clockCode.GDInviteObjects1= [];
gdjs.clockCode.GDInviteObjects2= [];
gdjs.clockCode.GDLeaderboardBtnObjects1= [];
gdjs.clockCode.GDLeaderboardBtnObjects2= [];
gdjs.clockCode.GDDashboardTNObjects1= [];
gdjs.clockCode.GDDashboardTNObjects2= [];
gdjs.clockCode.GDNoInternetTextObjects1= [];
gdjs.clockCode.GDNoInternetTextObjects2= [];
gdjs.clockCode.GDNoInternetObjects1= [];
gdjs.clockCode.GDNoInternetObjects2= [];
gdjs.clockCode.GDNoInternetBackgroundObjects1= [];
gdjs.clockCode.GDNoInternetBackgroundObjects2= [];
gdjs.clockCode.GDLoadingObjects1= [];
gdjs.clockCode.GDLoadingObjects2= [];
gdjs.clockCode.GDtimeObjects1= [];
gdjs.clockCode.GDtimeObjects2= [];
gdjs.clockCode.GDdateObjects1= [];
gdjs.clockCode.GDdateObjects2= [];
gdjs.clockCode.GDmonthObjects1= [];
gdjs.clockCode.GDmonthObjects2= [];
gdjs.clockCode.GDyearObjects1= [];
gdjs.clockCode.GDyearObjects2= [];
gdjs.clockCode.GDchannelObjects1= [];
gdjs.clockCode.GDchannelObjects2= [];
gdjs.clockCode.GDtutorialObjects1= [];
gdjs.clockCode.GDtutorialObjects2= [];

gdjs.clockCode.conditionTrue_0 = {val:false};
gdjs.clockCode.condition0IsTrue_0 = {val:false};
gdjs.clockCode.condition1IsTrue_0 = {val:false};
gdjs.clockCode.condition2IsTrue_0 = {val:false};
gdjs.clockCode.conditionTrue_1 = {val:false};
gdjs.clockCode.condition0IsTrue_1 = {val:false};
gdjs.clockCode.condition1IsTrue_1 = {val:false};
gdjs.clockCode.condition2IsTrue_1 = {val:false};


gdjs.clockCode.mapOfGDgdjs_46clockCode_46GDchannelObjects1Objects = Hashtable.newFrom({"channel": gdjs.clockCode.GDchannelObjects1});gdjs.clockCode.mapOfGDgdjs_46clockCode_46GDtutorialObjects1Objects = Hashtable.newFrom({"tutorial": gdjs.clockCode.GDtutorialObjects1});gdjs.clockCode.userFunc0xa212e8 = function(runtimeScene) {
"use strict";
var time_var = runtimeScene.getVariables().get("time_var");
var date_var = runtimeScene.getVariables().get("date_var");
var month_var = runtimeScene.getVariables().get("month_var");
var year_var = runtimeScene.getVariables().get("year_var");


var d = new Date();
var hour = d.getHours();
var min = d.getMinutes();
var sec = d.getSeconds();
var mili = d.getMilliseconds();


if (sec < 10) {
    time_var.setString(hour+":"+min+ ":0"+sec+":" +mili);
}else if (min < 10) {
    time_var.setString(hour+":0"+min+ ":"+sec+":" +mili);
}else {
    time_var.setString(hour+":"+min+ ":"+sec+":" +mili);
}


var date = d.getDate();


var day = d.getDay();
    var dayarr =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    day=dayarr[day];
date_var.setString(date+ " " +day);

var month = d.getMonth();
    var montharr =["January","February","March","April","May","June","July","August","September","October","November","December"];
    month=montharr[month];
month_var.setString(month);

var year = d.getFullYear();

year_var.setString(year);




};
gdjs.clockCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("date"), gdjs.clockCode.GDdateObjects1);
gdjs.copyArray(runtimeScene.getObjects("month"), gdjs.clockCode.GDmonthObjects1);
gdjs.copyArray(runtimeScene.getObjects("time"), gdjs.clockCode.GDtimeObjects1);
gdjs.copyArray(runtimeScene.getObjects("year"), gdjs.clockCode.GDyearObjects1);
{for(var i = 0, len = gdjs.clockCode.GDtimeObjects1.length ;i < len;++i) {
    gdjs.clockCode.GDtimeObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.clockCode.GDtimeObjects1[i].getWidth()) / 2);
}
}{for(var i = 0, len = gdjs.clockCode.GDdateObjects1.length ;i < len;++i) {
    gdjs.clockCode.GDdateObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.clockCode.GDdateObjects1[i].getWidth()) / 2);
}
}{for(var i = 0, len = gdjs.clockCode.GDmonthObjects1.length ;i < len;++i) {
    gdjs.clockCode.GDmonthObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.clockCode.GDmonthObjects1[i].getWidth()) / 2);
}
}{for(var i = 0, len = gdjs.clockCode.GDyearObjects1.length ;i < len;++i) {
    gdjs.clockCode.GDyearObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.clockCode.GDyearObjects1[i].getWidth()) / 2);
}
}{for(var i = 0, len = gdjs.clockCode.GDtimeObjects1.length ;i < len;++i) {
    gdjs.clockCode.GDtimeObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("time_var")));
}
}{for(var i = 0, len = gdjs.clockCode.GDdateObjects1.length ;i < len;++i) {
    gdjs.clockCode.GDdateObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("date_var")));
}
}{for(var i = 0, len = gdjs.clockCode.GDmonthObjects1.length ;i < len;++i) {
    gdjs.clockCode.GDmonthObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("month_var")));
}
}{for(var i = 0, len = gdjs.clockCode.GDyearObjects1.length ;i < len;++i) {
    gdjs.clockCode.GDyearObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("year_var")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("channel"), gdjs.clockCode.GDchannelObjects1);

gdjs.clockCode.condition0IsTrue_0.val = false;
gdjs.clockCode.condition1IsTrue_0.val = false;
{
gdjs.clockCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.clockCode.mapOfGDgdjs_46clockCode_46GDchannelObjects1Objects, runtimeScene, true, false);
}if ( gdjs.clockCode.condition0IsTrue_0.val ) {
{
{gdjs.clockCode.conditionTrue_1 = gdjs.clockCode.condition1IsTrue_0;
gdjs.clockCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17264908);
}
}}
if (gdjs.clockCode.condition1IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://www.youtube.com/channel/UCsZ4Ue8c94YLJDbGRafCI5Q", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("tutorial"), gdjs.clockCode.GDtutorialObjects1);

gdjs.clockCode.condition0IsTrue_0.val = false;
gdjs.clockCode.condition1IsTrue_0.val = false;
{
gdjs.clockCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.clockCode.mapOfGDgdjs_46clockCode_46GDtutorialObjects1Objects, runtimeScene, true, false);
}if ( gdjs.clockCode.condition0IsTrue_0.val ) {
{
{gdjs.clockCode.conditionTrue_1 = gdjs.clockCode.condition1IsTrue_0;
gdjs.clockCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17265804);
}
}}
if (gdjs.clockCode.condition1IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://www.youtube.com/watch?v=IXgUtdoAn3k", runtimeScene);
}}

}


{



}


{


gdjs.clockCode.userFunc0xa212e8(runtimeScene);

}


};

gdjs.clockCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.clockCode.GDAvezzoLogoObjects1.length = 0;
gdjs.clockCode.GDAvezzoLogoObjects2.length = 0;
gdjs.clockCode.GDPopUpObjects1.length = 0;
gdjs.clockCode.GDPopUpObjects2.length = 0;
gdjs.clockCode.GDBackgroundObjects1.length = 0;
gdjs.clockCode.GDBackgroundObjects2.length = 0;
gdjs.clockCode.GDNotificationBTNObjects1.length = 0;
gdjs.clockCode.GDNotificationBTNObjects2.length = 0;
gdjs.clockCode.GDProfilePicSmallObjects1.length = 0;
gdjs.clockCode.GDProfilePicSmallObjects2.length = 0;
gdjs.clockCode.GDBottomContainterObjects1.length = 0;
gdjs.clockCode.GDBottomContainterObjects2.length = 0;
gdjs.clockCode.GDInviteObjects1.length = 0;
gdjs.clockCode.GDInviteObjects2.length = 0;
gdjs.clockCode.GDLeaderboardBtnObjects1.length = 0;
gdjs.clockCode.GDLeaderboardBtnObjects2.length = 0;
gdjs.clockCode.GDDashboardTNObjects1.length = 0;
gdjs.clockCode.GDDashboardTNObjects2.length = 0;
gdjs.clockCode.GDNoInternetTextObjects1.length = 0;
gdjs.clockCode.GDNoInternetTextObjects2.length = 0;
gdjs.clockCode.GDNoInternetObjects1.length = 0;
gdjs.clockCode.GDNoInternetObjects2.length = 0;
gdjs.clockCode.GDNoInternetBackgroundObjects1.length = 0;
gdjs.clockCode.GDNoInternetBackgroundObjects2.length = 0;
gdjs.clockCode.GDLoadingObjects1.length = 0;
gdjs.clockCode.GDLoadingObjects2.length = 0;
gdjs.clockCode.GDtimeObjects1.length = 0;
gdjs.clockCode.GDtimeObjects2.length = 0;
gdjs.clockCode.GDdateObjects1.length = 0;
gdjs.clockCode.GDdateObjects2.length = 0;
gdjs.clockCode.GDmonthObjects1.length = 0;
gdjs.clockCode.GDmonthObjects2.length = 0;
gdjs.clockCode.GDyearObjects1.length = 0;
gdjs.clockCode.GDyearObjects2.length = 0;
gdjs.clockCode.GDchannelObjects1.length = 0;
gdjs.clockCode.GDchannelObjects2.length = 0;
gdjs.clockCode.GDtutorialObjects1.length = 0;
gdjs.clockCode.GDtutorialObjects2.length = 0;

gdjs.clockCode.eventsList0(runtimeScene);
return;

}

gdjs['clockCode'] = gdjs.clockCode;
