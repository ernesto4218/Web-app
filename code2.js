gdjs.LoadDataTestCode = {};
gdjs.LoadDataTestCode.GDAvezzoLogoObjects1= [];
gdjs.LoadDataTestCode.GDAvezzoLogoObjects2= [];
gdjs.LoadDataTestCode.GDAvezzoLogoObjects3= [];
gdjs.LoadDataTestCode.GDPopUpObjects1= [];
gdjs.LoadDataTestCode.GDPopUpObjects2= [];
gdjs.LoadDataTestCode.GDPopUpObjects3= [];
gdjs.LoadDataTestCode.GDBackgroundObjects1= [];
gdjs.LoadDataTestCode.GDBackgroundObjects2= [];
gdjs.LoadDataTestCode.GDBackgroundObjects3= [];
gdjs.LoadDataTestCode.GDNotificationBTNObjects1= [];
gdjs.LoadDataTestCode.GDNotificationBTNObjects2= [];
gdjs.LoadDataTestCode.GDNotificationBTNObjects3= [];
gdjs.LoadDataTestCode.GDProfilePicSmallObjects1= [];
gdjs.LoadDataTestCode.GDProfilePicSmallObjects2= [];
gdjs.LoadDataTestCode.GDProfilePicSmallObjects3= [];
gdjs.LoadDataTestCode.GDBottomContainterObjects1= [];
gdjs.LoadDataTestCode.GDBottomContainterObjects2= [];
gdjs.LoadDataTestCode.GDBottomContainterObjects3= [];
gdjs.LoadDataTestCode.GDInviteObjects1= [];
gdjs.LoadDataTestCode.GDInviteObjects2= [];
gdjs.LoadDataTestCode.GDInviteObjects3= [];
gdjs.LoadDataTestCode.GDLeaderboardBtnObjects1= [];
gdjs.LoadDataTestCode.GDLeaderboardBtnObjects2= [];
gdjs.LoadDataTestCode.GDLeaderboardBtnObjects3= [];
gdjs.LoadDataTestCode.GDDashboardTNObjects1= [];
gdjs.LoadDataTestCode.GDDashboardTNObjects2= [];
gdjs.LoadDataTestCode.GDDashboardTNObjects3= [];
gdjs.LoadDataTestCode.GDNoInternetTextObjects1= [];
gdjs.LoadDataTestCode.GDNoInternetTextObjects2= [];
gdjs.LoadDataTestCode.GDNoInternetTextObjects3= [];
gdjs.LoadDataTestCode.GDNoInternetObjects1= [];
gdjs.LoadDataTestCode.GDNoInternetObjects2= [];
gdjs.LoadDataTestCode.GDNoInternetObjects3= [];
gdjs.LoadDataTestCode.GDNoInternetBackgroundObjects1= [];
gdjs.LoadDataTestCode.GDNoInternetBackgroundObjects2= [];
gdjs.LoadDataTestCode.GDNoInternetBackgroundObjects3= [];
gdjs.LoadDataTestCode.GDLoadingObjects1= [];
gdjs.LoadDataTestCode.GDLoadingObjects2= [];
gdjs.LoadDataTestCode.GDLoadingObjects3= [];
gdjs.LoadDataTestCode.GDCopyObjects1= [];
gdjs.LoadDataTestCode.GDCopyObjects2= [];
gdjs.LoadDataTestCode.GDCopyObjects3= [];
gdjs.LoadDataTestCode.GDdefaultcamObjects1= [];
gdjs.LoadDataTestCode.GDdefaultcamObjects2= [];
gdjs.LoadDataTestCode.GDdefaultcamObjects3= [];
gdjs.LoadDataTestCode.GDErrorObjects1= [];
gdjs.LoadDataTestCode.GDErrorObjects2= [];
gdjs.LoadDataTestCode.GDErrorObjects3= [];
gdjs.LoadDataTestCode.GDValue2Objects1= [];
gdjs.LoadDataTestCode.GDValue2Objects2= [];
gdjs.LoadDataTestCode.GDValue2Objects3= [];
gdjs.LoadDataTestCode.GDSalesObjects1= [];
gdjs.LoadDataTestCode.GDSalesObjects2= [];
gdjs.LoadDataTestCode.GDSalesObjects3= [];
gdjs.LoadDataTestCode.GDLeaderboardObjects1= [];
gdjs.LoadDataTestCode.GDLeaderboardObjects2= [];
gdjs.LoadDataTestCode.GDLeaderboardObjects3= [];
gdjs.LoadDataTestCode.GDValueObjects1= [];
gdjs.LoadDataTestCode.GDValueObjects2= [];
gdjs.LoadDataTestCode.GDValueObjects3= [];
gdjs.LoadDataTestCode.GDBottomGridObjects1= [];
gdjs.LoadDataTestCode.GDBottomGridObjects2= [];
gdjs.LoadDataTestCode.GDBottomGridObjects3= [];
gdjs.LoadDataTestCode.GDDoneObjects1= [];
gdjs.LoadDataTestCode.GDDoneObjects2= [];
gdjs.LoadDataTestCode.GDDoneObjects3= [];
gdjs.LoadDataTestCode.GDTopgridObjects1= [];
gdjs.LoadDataTestCode.GDTopgridObjects2= [];
gdjs.LoadDataTestCode.GDTopgridObjects3= [];
gdjs.LoadDataTestCode.GDLimitObjects1= [];
gdjs.LoadDataTestCode.GDLimitObjects2= [];
gdjs.LoadDataTestCode.GDLimitObjects3= [];

gdjs.LoadDataTestCode.conditionTrue_0 = {val:false};
gdjs.LoadDataTestCode.condition0IsTrue_0 = {val:false};
gdjs.LoadDataTestCode.condition1IsTrue_0 = {val:false};
gdjs.LoadDataTestCode.condition2IsTrue_0 = {val:false};
gdjs.LoadDataTestCode.conditionTrue_1 = {val:false};
gdjs.LoadDataTestCode.condition0IsTrue_1 = {val:false};
gdjs.LoadDataTestCode.condition1IsTrue_1 = {val:false};
gdjs.LoadDataTestCode.condition2IsTrue_1 = {val:false};


gdjs.LoadDataTestCode.eventsList0 = function(runtimeScene) {

};gdjs.LoadDataTestCode.eventsList1 = function(runtimeScene) {

{



}


{



}


{



}


{



}


{



}


{



}


{


const keyIteratorReference3 = runtimeScene.getVariables().get("i");
const valueIteratorReference3 = runtimeScene.getVariables().get("doc");
const iterableReference3 = runtimeScene.getVariables().get("fetchdata").getChild("docs");
if(!iterableReference3.isPrimitive()) {
for(
    const iteratorKey3 in 
    iterableReference3.getType() === "structure"
      ? iterableReference3.getAllChildren()
      : iterableReference3.getType() === "array"
        ? iterableReference3.getAllChildrenArray()
        : []
) {
    if(iterableReference3.getType() === "structure")
        keyIteratorReference3.setString(iteratorKey3);
    else if(iterableReference3.getType() === "array")
        keyIteratorReference3.setNumber(iteratorKey3);
    const structureChildVariable3 = iterableReference3.getChild(iteratorKey3)
    valueIteratorReference3.castTo(structureChildVariable3.getType())
    if(structureChildVariable3.isPrimitive()) {
        valueIteratorReference3.setValue(structureChildVariable3.getValue());
    } else if (structureChildVariable3.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference3.replaceChildren(structureChildVariable3.getAllChildren());
    } else if (structureChildVariable3.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference3.replaceChildrenArray(structureChildVariable3.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);
gdjs.copyArray(runtimeScene.getObjects("Leaderboard"), gdjs.LoadDataTestCode.GDLeaderboardObjects3);

gdjs.LoadDataTestCode.condition0IsTrue_0.val = false;
{
{gdjs.LoadDataTestCode.conditionTrue_1 = gdjs.LoadDataTestCode.condition0IsTrue_0;
gdjs.LoadDataTestCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16752092);
}
}if (gdjs.LoadDataTestCode.condition0IsTrue_0.val)
{
{for(var i = 0, len = gdjs.LoadDataTestCode.GDLeaderboardObjects3.length ;i < len;++i) {
    gdjs.LoadDataTestCode.GDLeaderboardObjects3[i].setString(gdjs.LoadDataTestCode.GDLeaderboardObjects3[i].getString() + (gdjs.evtTools.string.newLine() + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("i")) + 1) + ".  " + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("doc").getChild("data").getChild("Name")) + "---" + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("doc").getChild("data").getChild("Balance")) + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine()));
}
}{runtimeScene.getVariables().getFromIndex(7).setNumber(gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getVariables().get("fetchdata").getChild("docs")));
}}
}
}

}


{



}


};gdjs.LoadDataTestCode.userFunc0xa2c768 = function(runtimeScene) {
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
gdjs.LoadDataTestCode.eventsList2 = function(runtimeScene) {

{


gdjs.LoadDataTestCode.eventsList1(runtimeScene);
}


{



}


{



}


{



}


{



}


{


gdjs.LoadDataTestCode.userFunc0xa2c768(runtimeScene);

}


{


{
}

}


{



}


{



}


{



}


{



}


{



}


{


gdjs.LoadDataTestCode.condition0IsTrue_0.val = false;
{
gdjs.LoadDataTestCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.LoadDataTestCode.condition0IsTrue_0.val) {
{gdjs.evtTools.storage.readNumberFromJSONFile("Loginattempts", "seconds", runtimeScene, runtimeScene.getVariables().getFromIndex(18));
}}

}


{


gdjs.LoadDataTestCode.condition0IsTrue_0.val = false;
gdjs.LoadDataTestCode.condition1IsTrue_0.val = false;
{
gdjs.LoadDataTestCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(17)) >= 5;
}if ( gdjs.LoadDataTestCode.condition0IsTrue_0.val ) {
{
{gdjs.LoadDataTestCode.conditionTrue_1 = gdjs.LoadDataTestCode.condition1IsTrue_0;
gdjs.LoadDataTestCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16778076);
}
}}
if (gdjs.LoadDataTestCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "loginattemps");
}}

}


{


gdjs.LoadDataTestCode.condition0IsTrue_0.val = false;
{
gdjs.LoadDataTestCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "loginattemps") > 1;
}if (gdjs.LoadDataTestCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "loginattemps");
}{runtimeScene.getVariables().getFromIndex(18).sub(1);
}{gdjs.evtTools.storage.writeNumberInJSONFile("Loginattempts", "seconds", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(18)));
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Value"), gdjs.LoadDataTestCode.GDValueObjects1);
{for(var i = 0, len = gdjs.LoadDataTestCode.GDValueObjects1.length ;i < len;++i) {
    gdjs.LoadDataTestCode.GDValueObjects1[i].setString("Too many login attemps. Please try again in " + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(18)) + " seconds");
}
}}

}


{


gdjs.LoadDataTestCode.condition0IsTrue_0.val = false;
{
gdjs.LoadDataTestCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
}if (gdjs.LoadDataTestCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "AdminPanel", false);
}}

}


};

gdjs.LoadDataTestCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LoadDataTestCode.GDAvezzoLogoObjects1.length = 0;
gdjs.LoadDataTestCode.GDAvezzoLogoObjects2.length = 0;
gdjs.LoadDataTestCode.GDAvezzoLogoObjects3.length = 0;
gdjs.LoadDataTestCode.GDPopUpObjects1.length = 0;
gdjs.LoadDataTestCode.GDPopUpObjects2.length = 0;
gdjs.LoadDataTestCode.GDPopUpObjects3.length = 0;
gdjs.LoadDataTestCode.GDBackgroundObjects1.length = 0;
gdjs.LoadDataTestCode.GDBackgroundObjects2.length = 0;
gdjs.LoadDataTestCode.GDBackgroundObjects3.length = 0;
gdjs.LoadDataTestCode.GDNotificationBTNObjects1.length = 0;
gdjs.LoadDataTestCode.GDNotificationBTNObjects2.length = 0;
gdjs.LoadDataTestCode.GDNotificationBTNObjects3.length = 0;
gdjs.LoadDataTestCode.GDProfilePicSmallObjects1.length = 0;
gdjs.LoadDataTestCode.GDProfilePicSmallObjects2.length = 0;
gdjs.LoadDataTestCode.GDProfilePicSmallObjects3.length = 0;
gdjs.LoadDataTestCode.GDBottomContainterObjects1.length = 0;
gdjs.LoadDataTestCode.GDBottomContainterObjects2.length = 0;
gdjs.LoadDataTestCode.GDBottomContainterObjects3.length = 0;
gdjs.LoadDataTestCode.GDInviteObjects1.length = 0;
gdjs.LoadDataTestCode.GDInviteObjects2.length = 0;
gdjs.LoadDataTestCode.GDInviteObjects3.length = 0;
gdjs.LoadDataTestCode.GDLeaderboardBtnObjects1.length = 0;
gdjs.LoadDataTestCode.GDLeaderboardBtnObjects2.length = 0;
gdjs.LoadDataTestCode.GDLeaderboardBtnObjects3.length = 0;
gdjs.LoadDataTestCode.GDDashboardTNObjects1.length = 0;
gdjs.LoadDataTestCode.GDDashboardTNObjects2.length = 0;
gdjs.LoadDataTestCode.GDDashboardTNObjects3.length = 0;
gdjs.LoadDataTestCode.GDNoInternetTextObjects1.length = 0;
gdjs.LoadDataTestCode.GDNoInternetTextObjects2.length = 0;
gdjs.LoadDataTestCode.GDNoInternetTextObjects3.length = 0;
gdjs.LoadDataTestCode.GDNoInternetObjects1.length = 0;
gdjs.LoadDataTestCode.GDNoInternetObjects2.length = 0;
gdjs.LoadDataTestCode.GDNoInternetObjects3.length = 0;
gdjs.LoadDataTestCode.GDNoInternetBackgroundObjects1.length = 0;
gdjs.LoadDataTestCode.GDNoInternetBackgroundObjects2.length = 0;
gdjs.LoadDataTestCode.GDNoInternetBackgroundObjects3.length = 0;
gdjs.LoadDataTestCode.GDLoadingObjects1.length = 0;
gdjs.LoadDataTestCode.GDLoadingObjects2.length = 0;
gdjs.LoadDataTestCode.GDLoadingObjects3.length = 0;
gdjs.LoadDataTestCode.GDCopyObjects1.length = 0;
gdjs.LoadDataTestCode.GDCopyObjects2.length = 0;
gdjs.LoadDataTestCode.GDCopyObjects3.length = 0;
gdjs.LoadDataTestCode.GDdefaultcamObjects1.length = 0;
gdjs.LoadDataTestCode.GDdefaultcamObjects2.length = 0;
gdjs.LoadDataTestCode.GDdefaultcamObjects3.length = 0;
gdjs.LoadDataTestCode.GDErrorObjects1.length = 0;
gdjs.LoadDataTestCode.GDErrorObjects2.length = 0;
gdjs.LoadDataTestCode.GDErrorObjects3.length = 0;
gdjs.LoadDataTestCode.GDValue2Objects1.length = 0;
gdjs.LoadDataTestCode.GDValue2Objects2.length = 0;
gdjs.LoadDataTestCode.GDValue2Objects3.length = 0;
gdjs.LoadDataTestCode.GDSalesObjects1.length = 0;
gdjs.LoadDataTestCode.GDSalesObjects2.length = 0;
gdjs.LoadDataTestCode.GDSalesObjects3.length = 0;
gdjs.LoadDataTestCode.GDLeaderboardObjects1.length = 0;
gdjs.LoadDataTestCode.GDLeaderboardObjects2.length = 0;
gdjs.LoadDataTestCode.GDLeaderboardObjects3.length = 0;
gdjs.LoadDataTestCode.GDValueObjects1.length = 0;
gdjs.LoadDataTestCode.GDValueObjects2.length = 0;
gdjs.LoadDataTestCode.GDValueObjects3.length = 0;
gdjs.LoadDataTestCode.GDBottomGridObjects1.length = 0;
gdjs.LoadDataTestCode.GDBottomGridObjects2.length = 0;
gdjs.LoadDataTestCode.GDBottomGridObjects3.length = 0;
gdjs.LoadDataTestCode.GDDoneObjects1.length = 0;
gdjs.LoadDataTestCode.GDDoneObjects2.length = 0;
gdjs.LoadDataTestCode.GDDoneObjects3.length = 0;
gdjs.LoadDataTestCode.GDTopgridObjects1.length = 0;
gdjs.LoadDataTestCode.GDTopgridObjects2.length = 0;
gdjs.LoadDataTestCode.GDTopgridObjects3.length = 0;
gdjs.LoadDataTestCode.GDLimitObjects1.length = 0;
gdjs.LoadDataTestCode.GDLimitObjects2.length = 0;
gdjs.LoadDataTestCode.GDLimitObjects3.length = 0;

gdjs.LoadDataTestCode.eventsList2(runtimeScene);
return;

}

gdjs['LoadDataTestCode'] = gdjs.LoadDataTestCode;
