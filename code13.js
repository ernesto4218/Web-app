gdjs.VerificationFormCode = {};
gdjs.VerificationFormCode.GDAvezzoLogoObjects1= [];
gdjs.VerificationFormCode.GDAvezzoLogoObjects2= [];
gdjs.VerificationFormCode.GDAvezzoLogoObjects3= [];
gdjs.VerificationFormCode.GDPopUpObjects1= [];
gdjs.VerificationFormCode.GDPopUpObjects2= [];
gdjs.VerificationFormCode.GDPopUpObjects3= [];
gdjs.VerificationFormCode.GDBackgroundObjects1= [];
gdjs.VerificationFormCode.GDBackgroundObjects2= [];
gdjs.VerificationFormCode.GDBackgroundObjects3= [];
gdjs.VerificationFormCode.GDNotificationBTNObjects1= [];
gdjs.VerificationFormCode.GDNotificationBTNObjects2= [];
gdjs.VerificationFormCode.GDNotificationBTNObjects3= [];
gdjs.VerificationFormCode.GDProfilePicSmallObjects1= [];
gdjs.VerificationFormCode.GDProfilePicSmallObjects2= [];
gdjs.VerificationFormCode.GDProfilePicSmallObjects3= [];
gdjs.VerificationFormCode.GDBottomContainterObjects1= [];
gdjs.VerificationFormCode.GDBottomContainterObjects2= [];
gdjs.VerificationFormCode.GDBottomContainterObjects3= [];
gdjs.VerificationFormCode.GDInviteObjects1= [];
gdjs.VerificationFormCode.GDInviteObjects2= [];
gdjs.VerificationFormCode.GDInviteObjects3= [];
gdjs.VerificationFormCode.GDLeaderboardBtnObjects1= [];
gdjs.VerificationFormCode.GDLeaderboardBtnObjects2= [];
gdjs.VerificationFormCode.GDLeaderboardBtnObjects3= [];
gdjs.VerificationFormCode.GDDashboardTNObjects1= [];
gdjs.VerificationFormCode.GDDashboardTNObjects2= [];
gdjs.VerificationFormCode.GDDashboardTNObjects3= [];
gdjs.VerificationFormCode.GDNoInternetTextObjects1= [];
gdjs.VerificationFormCode.GDNoInternetTextObjects2= [];
gdjs.VerificationFormCode.GDNoInternetTextObjects3= [];
gdjs.VerificationFormCode.GDNoInternetObjects1= [];
gdjs.VerificationFormCode.GDNoInternetObjects2= [];
gdjs.VerificationFormCode.GDNoInternetObjects3= [];
gdjs.VerificationFormCode.GDNoInternetBackgroundObjects1= [];
gdjs.VerificationFormCode.GDNoInternetBackgroundObjects2= [];
gdjs.VerificationFormCode.GDNoInternetBackgroundObjects3= [];
gdjs.VerificationFormCode.GDLoadingObjects1= [];
gdjs.VerificationFormCode.GDLoadingObjects2= [];
gdjs.VerificationFormCode.GDLoadingObjects3= [];
gdjs.VerificationFormCode.GDFormObjects1= [];
gdjs.VerificationFormCode.GDFormObjects2= [];
gdjs.VerificationFormCode.GDFormObjects3= [];
gdjs.VerificationFormCode.GDDatetxtObjects1= [];
gdjs.VerificationFormCode.GDDatetxtObjects2= [];
gdjs.VerificationFormCode.GDDatetxtObjects3= [];
gdjs.VerificationFormCode.GDFullnametxtObjects1= [];
gdjs.VerificationFormCode.GDFullnametxtObjects2= [];
gdjs.VerificationFormCode.GDFullnametxtObjects3= [];
gdjs.VerificationFormCode.GDVerificationIDtxtObjects1= [];
gdjs.VerificationFormCode.GDVerificationIDtxtObjects2= [];
gdjs.VerificationFormCode.GDVerificationIDtxtObjects3= [];
gdjs.VerificationFormCode.GDQ3Objects1= [];
gdjs.VerificationFormCode.GDQ3Objects2= [];
gdjs.VerificationFormCode.GDQ3Objects3= [];
gdjs.VerificationFormCode.GDQ2Objects1= [];
gdjs.VerificationFormCode.GDQ2Objects2= [];
gdjs.VerificationFormCode.GDQ2Objects3= [];
gdjs.VerificationFormCode.GDQ1Objects1= [];
gdjs.VerificationFormCode.GDQ1Objects2= [];
gdjs.VerificationFormCode.GDQ1Objects3= [];
gdjs.VerificationFormCode.GDSubmitObjects1= [];
gdjs.VerificationFormCode.GDSubmitObjects2= [];
gdjs.VerificationFormCode.GDSubmitObjects3= [];
gdjs.VerificationFormCode.GDcloseObjects1= [];
gdjs.VerificationFormCode.GDcloseObjects2= [];
gdjs.VerificationFormCode.GDcloseObjects3= [];

gdjs.VerificationFormCode.conditionTrue_0 = {val:false};
gdjs.VerificationFormCode.condition0IsTrue_0 = {val:false};
gdjs.VerificationFormCode.condition1IsTrue_0 = {val:false};
gdjs.VerificationFormCode.condition2IsTrue_0 = {val:false};
gdjs.VerificationFormCode.condition3IsTrue_0 = {val:false};
gdjs.VerificationFormCode.condition4IsTrue_0 = {val:false};
gdjs.VerificationFormCode.conditionTrue_1 = {val:false};
gdjs.VerificationFormCode.condition0IsTrue_1 = {val:false};
gdjs.VerificationFormCode.condition1IsTrue_1 = {val:false};
gdjs.VerificationFormCode.condition2IsTrue_1 = {val:false};
gdjs.VerificationFormCode.condition3IsTrue_1 = {val:false};
gdjs.VerificationFormCode.condition4IsTrue_1 = {val:false};


gdjs.VerificationFormCode.eventsList0 = function(runtimeScene) {

{


gdjs.VerificationFormCode.condition0IsTrue_0.val = false;
{
gdjs.VerificationFormCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.VerificationFormCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("defaultcameradown").setNumber(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + 3800);
}{runtimeScene.getVariables().get("defaultcameraup").setNumber(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("DefaultCameraReady"), true);
}}

}


{



}


{


gdjs.VerificationFormCode.condition0IsTrue_0.val = false;
{
gdjs.VerificationFormCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("cameraPos")) <= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("defaultcameradown"));
}if (gdjs.VerificationFormCode.condition0IsTrue_0.val) {
{gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.func(runtimeScene, 0, "", "vertical", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{runtimeScene.getVariables().get("cameraPos").setNumber(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}{runtimeScene.getVariables().get("cameraPosUp").setNumber(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}}

}


{


gdjs.VerificationFormCode.condition0IsTrue_0.val = false;
{
gdjs.VerificationFormCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("cameraPos")) >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("defaultcameradown"));
}if (gdjs.VerificationFormCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("defaultcameradown")), "", 0);
}{runtimeScene.getVariables().get("cameraPos").setNumber(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}}

}


{



}


{


gdjs.VerificationFormCode.condition0IsTrue_0.val = false;
{
gdjs.VerificationFormCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("cameraPosUp")) <= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("defaultcameraup"));
}if (gdjs.VerificationFormCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("defaultcameraup")), "", 0);
}{runtimeScene.getVariables().get("cameraPosUp").setNumber(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}}

}


};gdjs.VerificationFormCode.eventsList1 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Datetxt"), gdjs.VerificationFormCode.GDDatetxtObjects2);
gdjs.copyArray(runtimeScene.getObjects("Fullnametxt"), gdjs.VerificationFormCode.GDFullnametxtObjects2);
gdjs.copyArray(runtimeScene.getObjects("VerificationIDtxt"), gdjs.VerificationFormCode.GDVerificationIDtxtObjects2);
{for(var i = 0, len = gdjs.VerificationFormCode.GDVerificationIDtxtObjects2.length ;i < len;++i) {
    gdjs.VerificationFormCode.GDVerificationIDtxtObjects2[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Auth").getChild("VerificationID")));
}
}{for(var i = 0, len = gdjs.VerificationFormCode.GDFullnametxtObjects2.length ;i < len;++i) {
    gdjs.VerificationFormCode.GDFullnametxtObjects2[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Auth").getChild("FullName")));
}
}{for(var i = 0, len = gdjs.VerificationFormCode.GDDatetxtObjects2.length ;i < len;++i) {
    gdjs.VerificationFormCode.GDDatetxtObjects2[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("date_var")) + ", " + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("month_var")) + " " + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("year_var")));
}
}}

}


{


gdjs.VerificationFormCode.condition0IsTrue_0.val = false;
{
{gdjs.VerificationFormCode.conditionTrue_1 = gdjs.VerificationFormCode.condition0IsTrue_0;
gdjs.VerificationFormCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17625340);
}
}if (gdjs.VerificationFormCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Submit"), gdjs.VerificationFormCode.GDSubmitObjects1);
gdjs.copyArray(runtimeScene.getObjects("close"), gdjs.VerificationFormCode.GDcloseObjects1);
{for(var i = 0, len = gdjs.VerificationFormCode.GDcloseObjects1.length ;i < len;++i) {
    gdjs.VerificationFormCode.GDcloseObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.VerificationFormCode.GDSubmitObjects1.length ;i < len;++i) {
    gdjs.VerificationFormCode.GDSubmitObjects1[i].setOpacity(0);
}
}}

}


};gdjs.VerificationFormCode.userFunc0x9e95c8 = function(runtimeScene) {
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
gdjs.VerificationFormCode.mapOfGDgdjs_46VerificationFormCode_46GDcloseObjects1Objects = Hashtable.newFrom({"close": gdjs.VerificationFormCode.GDcloseObjects1});gdjs.VerificationFormCode.mapOfGDgdjs_46VerificationFormCode_46GDSubmitObjects1Objects = Hashtable.newFrom({"Submit": gdjs.VerificationFormCode.GDSubmitObjects1});gdjs.VerificationFormCode.eventsList2 = function(runtimeScene) {

{


gdjs.VerificationFormCode.eventsList0(runtimeScene);
}


{


gdjs.VerificationFormCode.eventsList1(runtimeScene);
}


{



}


{


gdjs.VerificationFormCode.userFunc0x9e95c8(runtimeScene);

}


{

gdjs.copyArray(runtimeScene.getObjects("close"), gdjs.VerificationFormCode.GDcloseObjects1);

gdjs.VerificationFormCode.condition0IsTrue_0.val = false;
gdjs.VerificationFormCode.condition1IsTrue_0.val = false;
gdjs.VerificationFormCode.condition2IsTrue_0.val = false;
{
gdjs.VerificationFormCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.VerificationFormCode.mapOfGDgdjs_46VerificationFormCode_46GDcloseObjects1Objects, runtimeScene, true, false);
}if ( gdjs.VerificationFormCode.condition0IsTrue_0.val ) {
{
gdjs.VerificationFormCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.VerificationFormCode.condition1IsTrue_0.val ) {
{
{gdjs.VerificationFormCode.conditionTrue_1 = gdjs.VerificationFormCode.condition2IsTrue_0;
gdjs.VerificationFormCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17627012);
}
}}
}
if (gdjs.VerificationFormCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Home", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Submit"), gdjs.VerificationFormCode.GDSubmitObjects1);

gdjs.VerificationFormCode.condition0IsTrue_0.val = false;
gdjs.VerificationFormCode.condition1IsTrue_0.val = false;
gdjs.VerificationFormCode.condition2IsTrue_0.val = false;
gdjs.VerificationFormCode.condition3IsTrue_0.val = false;
{
gdjs.VerificationFormCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("SendVerificationstatus")) != "ok";
}if ( gdjs.VerificationFormCode.condition0IsTrue_0.val ) {
{
gdjs.VerificationFormCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.VerificationFormCode.mapOfGDgdjs_46VerificationFormCode_46GDSubmitObjects1Objects, runtimeScene, true, false);
}if ( gdjs.VerificationFormCode.condition1IsTrue_0.val ) {
{
gdjs.VerificationFormCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.VerificationFormCode.condition2IsTrue_0.val ) {
{
{gdjs.VerificationFormCode.conditionTrue_1 = gdjs.VerificationFormCode.condition3IsTrue_0;
gdjs.VerificationFormCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17629036);
}
}}
}
}
if (gdjs.VerificationFormCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Datetxt"), gdjs.VerificationFormCode.GDDatetxtObjects1);
gdjs.copyArray(runtimeScene.getObjects("Fullnametxt"), gdjs.VerificationFormCode.GDFullnametxtObjects1);
gdjs.copyArray(runtimeScene.getObjects("Q1"), gdjs.VerificationFormCode.GDQ1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Q2"), gdjs.VerificationFormCode.GDQ2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Q3"), gdjs.VerificationFormCode.GDQ3Objects1);
gdjs.copyArray(runtimeScene.getObjects("VerificationIDtxt"), gdjs.VerificationFormCode.GDVerificationIDtxtObjects1);
{runtimeScene.getVariables().getFromIndex(0).getChild("Fullname").setString((( gdjs.VerificationFormCode.GDFullnametxtObjects1.length === 0 ) ? "" :gdjs.VerificationFormCode.GDFullnametxtObjects1[0].getString()));
}{runtimeScene.getVariables().getFromIndex(0).getChild("VerificationID").setString((( gdjs.VerificationFormCode.GDVerificationIDtxtObjects1.length === 0 ) ? "" :gdjs.VerificationFormCode.GDVerificationIDtxtObjects1[0].getString()));
}{runtimeScene.getVariables().getFromIndex(0).getChild("Date").setString((( gdjs.VerificationFormCode.GDDatetxtObjects1.length === 0 ) ? "" :gdjs.VerificationFormCode.GDDatetxtObjects1[0].getString()));
}{runtimeScene.getVariables().getFromIndex(0).getChild("about_us").setString((( gdjs.VerificationFormCode.GDQ1Objects1.length === 0 ) ? "" :gdjs.VerificationFormCode.GDQ1Objects1[0].getString()));
}{runtimeScene.getVariables().getFromIndex(0).getChild("favorite_brands").setString((( gdjs.VerificationFormCode.GDQ2Objects1.length === 0 ) ? "" :gdjs.VerificationFormCode.GDQ2Objects1[0].getString()));
}{runtimeScene.getVariables().getFromIndex(0).getChild("about_yourself").setString((( gdjs.VerificationFormCode.GDQ3Objects1.length === 0 ) ? "" :gdjs.VerificationFormCode.GDQ3Objects1[0].getString()));
}{runtimeScene.getVariables().getFromIndex(0).getChild("VerificationSubmitted").setString("true");
}{runtimeScene.getVariables().getFromIndex(0).getChild("UserID").setString(gdjs.evtTools.firebaseTools.auth.userManagement.getUID());
}{gdjs.evtTools.firebaseTools.firestore.writeDocument("verification", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Auth").getChild("VerificationID")), runtimeScene.getVariables().getFromIndex(0), runtimeScene.getVariables().get("SendVerificationstatus"));
}}

}


{


gdjs.VerificationFormCode.condition0IsTrue_0.val = false;
gdjs.VerificationFormCode.condition1IsTrue_0.val = false;
{
gdjs.VerificationFormCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("SendVerificationstatus")) == "ok";
}if ( gdjs.VerificationFormCode.condition0IsTrue_0.val ) {
{
{gdjs.VerificationFormCode.conditionTrue_1 = gdjs.VerificationFormCode.condition1IsTrue_0;
gdjs.VerificationFormCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17637204);
}
}}
if (gdjs.VerificationFormCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Submit for Verification", false);
}}

}


};

gdjs.VerificationFormCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.VerificationFormCode.GDAvezzoLogoObjects1.length = 0;
gdjs.VerificationFormCode.GDAvezzoLogoObjects2.length = 0;
gdjs.VerificationFormCode.GDAvezzoLogoObjects3.length = 0;
gdjs.VerificationFormCode.GDPopUpObjects1.length = 0;
gdjs.VerificationFormCode.GDPopUpObjects2.length = 0;
gdjs.VerificationFormCode.GDPopUpObjects3.length = 0;
gdjs.VerificationFormCode.GDBackgroundObjects1.length = 0;
gdjs.VerificationFormCode.GDBackgroundObjects2.length = 0;
gdjs.VerificationFormCode.GDBackgroundObjects3.length = 0;
gdjs.VerificationFormCode.GDNotificationBTNObjects1.length = 0;
gdjs.VerificationFormCode.GDNotificationBTNObjects2.length = 0;
gdjs.VerificationFormCode.GDNotificationBTNObjects3.length = 0;
gdjs.VerificationFormCode.GDProfilePicSmallObjects1.length = 0;
gdjs.VerificationFormCode.GDProfilePicSmallObjects2.length = 0;
gdjs.VerificationFormCode.GDProfilePicSmallObjects3.length = 0;
gdjs.VerificationFormCode.GDBottomContainterObjects1.length = 0;
gdjs.VerificationFormCode.GDBottomContainterObjects2.length = 0;
gdjs.VerificationFormCode.GDBottomContainterObjects3.length = 0;
gdjs.VerificationFormCode.GDInviteObjects1.length = 0;
gdjs.VerificationFormCode.GDInviteObjects2.length = 0;
gdjs.VerificationFormCode.GDInviteObjects3.length = 0;
gdjs.VerificationFormCode.GDLeaderboardBtnObjects1.length = 0;
gdjs.VerificationFormCode.GDLeaderboardBtnObjects2.length = 0;
gdjs.VerificationFormCode.GDLeaderboardBtnObjects3.length = 0;
gdjs.VerificationFormCode.GDDashboardTNObjects1.length = 0;
gdjs.VerificationFormCode.GDDashboardTNObjects2.length = 0;
gdjs.VerificationFormCode.GDDashboardTNObjects3.length = 0;
gdjs.VerificationFormCode.GDNoInternetTextObjects1.length = 0;
gdjs.VerificationFormCode.GDNoInternetTextObjects2.length = 0;
gdjs.VerificationFormCode.GDNoInternetTextObjects3.length = 0;
gdjs.VerificationFormCode.GDNoInternetObjects1.length = 0;
gdjs.VerificationFormCode.GDNoInternetObjects2.length = 0;
gdjs.VerificationFormCode.GDNoInternetObjects3.length = 0;
gdjs.VerificationFormCode.GDNoInternetBackgroundObjects1.length = 0;
gdjs.VerificationFormCode.GDNoInternetBackgroundObjects2.length = 0;
gdjs.VerificationFormCode.GDNoInternetBackgroundObjects3.length = 0;
gdjs.VerificationFormCode.GDLoadingObjects1.length = 0;
gdjs.VerificationFormCode.GDLoadingObjects2.length = 0;
gdjs.VerificationFormCode.GDLoadingObjects3.length = 0;
gdjs.VerificationFormCode.GDFormObjects1.length = 0;
gdjs.VerificationFormCode.GDFormObjects2.length = 0;
gdjs.VerificationFormCode.GDFormObjects3.length = 0;
gdjs.VerificationFormCode.GDDatetxtObjects1.length = 0;
gdjs.VerificationFormCode.GDDatetxtObjects2.length = 0;
gdjs.VerificationFormCode.GDDatetxtObjects3.length = 0;
gdjs.VerificationFormCode.GDFullnametxtObjects1.length = 0;
gdjs.VerificationFormCode.GDFullnametxtObjects2.length = 0;
gdjs.VerificationFormCode.GDFullnametxtObjects3.length = 0;
gdjs.VerificationFormCode.GDVerificationIDtxtObjects1.length = 0;
gdjs.VerificationFormCode.GDVerificationIDtxtObjects2.length = 0;
gdjs.VerificationFormCode.GDVerificationIDtxtObjects3.length = 0;
gdjs.VerificationFormCode.GDQ3Objects1.length = 0;
gdjs.VerificationFormCode.GDQ3Objects2.length = 0;
gdjs.VerificationFormCode.GDQ3Objects3.length = 0;
gdjs.VerificationFormCode.GDQ2Objects1.length = 0;
gdjs.VerificationFormCode.GDQ2Objects2.length = 0;
gdjs.VerificationFormCode.GDQ2Objects3.length = 0;
gdjs.VerificationFormCode.GDQ1Objects1.length = 0;
gdjs.VerificationFormCode.GDQ1Objects2.length = 0;
gdjs.VerificationFormCode.GDQ1Objects3.length = 0;
gdjs.VerificationFormCode.GDSubmitObjects1.length = 0;
gdjs.VerificationFormCode.GDSubmitObjects2.length = 0;
gdjs.VerificationFormCode.GDSubmitObjects3.length = 0;
gdjs.VerificationFormCode.GDcloseObjects1.length = 0;
gdjs.VerificationFormCode.GDcloseObjects2.length = 0;
gdjs.VerificationFormCode.GDcloseObjects3.length = 0;

gdjs.VerificationFormCode.eventsList2(runtimeScene);
return;

}

gdjs['VerificationFormCode'] = gdjs.VerificationFormCode;
