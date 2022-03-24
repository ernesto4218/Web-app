gdjs.IntroCode = {};
gdjs.IntroCode.GDAvezzoLogoObjects1= [];
gdjs.IntroCode.GDAvezzoLogoObjects2= [];
gdjs.IntroCode.GDAvezzoLogoObjects3= [];
gdjs.IntroCode.GDPopUpObjects1= [];
gdjs.IntroCode.GDPopUpObjects2= [];
gdjs.IntroCode.GDPopUpObjects3= [];
gdjs.IntroCode.GDBackgroundObjects1= [];
gdjs.IntroCode.GDBackgroundObjects2= [];
gdjs.IntroCode.GDBackgroundObjects3= [];
gdjs.IntroCode.GDNotificationBTNObjects1= [];
gdjs.IntroCode.GDNotificationBTNObjects2= [];
gdjs.IntroCode.GDNotificationBTNObjects3= [];
gdjs.IntroCode.GDProfilePicSmallObjects1= [];
gdjs.IntroCode.GDProfilePicSmallObjects2= [];
gdjs.IntroCode.GDProfilePicSmallObjects3= [];
gdjs.IntroCode.GDBottomContainterObjects1= [];
gdjs.IntroCode.GDBottomContainterObjects2= [];
gdjs.IntroCode.GDBottomContainterObjects3= [];
gdjs.IntroCode.GDInviteObjects1= [];
gdjs.IntroCode.GDInviteObjects2= [];
gdjs.IntroCode.GDInviteObjects3= [];
gdjs.IntroCode.GDLeaderboardBtnObjects1= [];
gdjs.IntroCode.GDLeaderboardBtnObjects2= [];
gdjs.IntroCode.GDLeaderboardBtnObjects3= [];
gdjs.IntroCode.GDDashboardTNObjects1= [];
gdjs.IntroCode.GDDashboardTNObjects2= [];
gdjs.IntroCode.GDDashboardTNObjects3= [];
gdjs.IntroCode.GDNoInternetTextObjects1= [];
gdjs.IntroCode.GDNoInternetTextObjects2= [];
gdjs.IntroCode.GDNoInternetTextObjects3= [];
gdjs.IntroCode.GDNoInternetObjects1= [];
gdjs.IntroCode.GDNoInternetObjects2= [];
gdjs.IntroCode.GDNoInternetObjects3= [];
gdjs.IntroCode.GDNoInternetBackgroundObjects1= [];
gdjs.IntroCode.GDNoInternetBackgroundObjects2= [];
gdjs.IntroCode.GDNoInternetBackgroundObjects3= [];
gdjs.IntroCode.GDLoadingObjects1= [];
gdjs.IntroCode.GDLoadingObjects2= [];
gdjs.IntroCode.GDLoadingObjects3= [];
gdjs.IntroCode.GDIntroObjects1= [];
gdjs.IntroCode.GDIntroObjects2= [];
gdjs.IntroCode.GDIntroObjects3= [];
gdjs.IntroCode.GDIndicatorBackgroundObjects1= [];
gdjs.IntroCode.GDIndicatorBackgroundObjects2= [];
gdjs.IntroCode.GDIndicatorBackgroundObjects3= [];
gdjs.IntroCode.GDSkipObjects1= [];
gdjs.IntroCode.GDSkipObjects2= [];
gdjs.IntroCode.GDSkipObjects3= [];
gdjs.IntroCode.GDCreateAccountObjects1= [];
gdjs.IntroCode.GDCreateAccountObjects2= [];
gdjs.IntroCode.GDCreateAccountObjects3= [];
gdjs.IntroCode.GDLoginObjects1= [];
gdjs.IntroCode.GDLoginObjects2= [];
gdjs.IntroCode.GDLoginObjects3= [];
gdjs.IntroCode.GDnextObjects1= [];
gdjs.IntroCode.GDnextObjects2= [];
gdjs.IntroCode.GDnextObjects3= [];

gdjs.IntroCode.conditionTrue_0 = {val:false};
gdjs.IntroCode.condition0IsTrue_0 = {val:false};
gdjs.IntroCode.condition1IsTrue_0 = {val:false};
gdjs.IntroCode.condition2IsTrue_0 = {val:false};
gdjs.IntroCode.condition3IsTrue_0 = {val:false};
gdjs.IntroCode.conditionTrue_1 = {val:false};
gdjs.IntroCode.condition0IsTrue_1 = {val:false};
gdjs.IntroCode.condition1IsTrue_1 = {val:false};
gdjs.IntroCode.condition2IsTrue_1 = {val:false};
gdjs.IntroCode.condition3IsTrue_1 = {val:false};


gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDnextObjects2Objects = Hashtable.newFrom({"next": gdjs.IntroCode.GDnextObjects2});gdjs.IntroCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Intro"), gdjs.IntroCode.GDIntroObjects2);

gdjs.IntroCode.condition0IsTrue_0.val = false;
gdjs.IntroCode.condition1IsTrue_0.val = false;
gdjs.IntroCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.IntroCode.GDIntroObjects2.length;i<l;++i) {
    if ( gdjs.IntroCode.GDIntroObjects2[i].getAnimation() < 3 ) {
        gdjs.IntroCode.condition0IsTrue_0.val = true;
        gdjs.IntroCode.GDIntroObjects2[k] = gdjs.IntroCode.GDIntroObjects2[i];
        ++k;
    }
}
gdjs.IntroCode.GDIntroObjects2.length = k;}if ( gdjs.IntroCode.condition0IsTrue_0.val ) {
{
gdjs.IntroCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.IntroCode.condition1IsTrue_0.val ) {
{
{gdjs.IntroCode.conditionTrue_1 = gdjs.IntroCode.condition2IsTrue_0;
gdjs.IntroCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16554892);
}
}}
}
if (gdjs.IntroCode.condition2IsTrue_0.val) {
/* Reuse gdjs.IntroCode.GDIntroObjects2 */
{for(var i = 0, len = gdjs.IntroCode.GDIntroObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDIntroObjects2[i].setAnimation(gdjs.IntroCode.GDIntroObjects2[i].getAnimation() + (1));
}
}}

}


};gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDSkipObjects1Objects = Hashtable.newFrom({"Skip": gdjs.IntroCode.GDSkipObjects1});gdjs.IntroCode.eventsList1 = function(runtimeScene) {

{


gdjs.IntroCode.condition0IsTrue_0.val = false;
gdjs.IntroCode.condition1IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.IntroCode.condition0IsTrue_0.val ) {
{
{gdjs.IntroCode.conditionTrue_1 = gdjs.IntroCode.condition1IsTrue_0;
gdjs.IntroCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16556980);
}
}}
if (gdjs.IntroCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Login", false);
}}

}


};gdjs.IntroCode.eventsList2 = function(runtimeScene) {

{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("CreateAccount"), gdjs.IntroCode.GDCreateAccountObjects2);
gdjs.copyArray(runtimeScene.getObjects("Login"), gdjs.IntroCode.GDLoginObjects2);
gdjs.copyArray(runtimeScene.getObjects("Skip"), gdjs.IntroCode.GDSkipObjects2);
gdjs.copyArray(runtimeScene.getObjects("next"), gdjs.IntroCode.GDnextObjects2);
{for(var i = 0, len = gdjs.IntroCode.GDnextObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDnextObjects2[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.IntroCode.GDSkipObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDSkipObjects2[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.IntroCode.GDLoginObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDLoginObjects2[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.IntroCode.GDCreateAccountObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDCreateAccountObjects2[i].setOpacity(0);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Intro"), gdjs.IntroCode.GDIntroObjects2);

gdjs.IntroCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.IntroCode.GDIntroObjects2.length;i<l;++i) {
    if ( gdjs.IntroCode.GDIntroObjects2[i].getAnimation() <= 2 ) {
        gdjs.IntroCode.condition0IsTrue_0.val = true;
        gdjs.IntroCode.GDIntroObjects2[k] = gdjs.IntroCode.GDIntroObjects2[i];
        ++k;
    }
}
gdjs.IntroCode.GDIntroObjects2.length = k;}if (gdjs.IntroCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("CreateAccount"), gdjs.IntroCode.GDCreateAccountObjects2);
gdjs.copyArray(runtimeScene.getObjects("Login"), gdjs.IntroCode.GDLoginObjects2);
gdjs.copyArray(runtimeScene.getObjects("Skip"), gdjs.IntroCode.GDSkipObjects2);
gdjs.copyArray(runtimeScene.getObjects("next"), gdjs.IntroCode.GDnextObjects2);
{for(var i = 0, len = gdjs.IntroCode.GDLoginObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDLoginObjects2[i].setX(-(2000));
}
}{for(var i = 0, len = gdjs.IntroCode.GDCreateAccountObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDCreateAccountObjects2[i].setX(-(2000));
}
}{for(var i = 0, len = gdjs.IntroCode.GDnextObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDnextObjects2[i].setX(290);
}
}{for(var i = 0, len = gdjs.IntroCode.GDSkipObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDSkipObjects2[i].setX(55);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("next"), gdjs.IntroCode.GDnextObjects2);

gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDnextObjects2Objects, runtimeScene, true, false);
}if (gdjs.IntroCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.IntroCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Intro"), gdjs.IntroCode.GDIntroObjects2);

gdjs.IntroCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.IntroCode.GDIntroObjects2.length;i<l;++i) {
    if ( gdjs.IntroCode.GDIntroObjects2[i].getAnimation() == 3 ) {
        gdjs.IntroCode.condition0IsTrue_0.val = true;
        gdjs.IntroCode.GDIntroObjects2[k] = gdjs.IntroCode.GDIntroObjects2[i];
        ++k;
    }
}
gdjs.IntroCode.GDIntroObjects2.length = k;}if (gdjs.IntroCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Login", false);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Skip"), gdjs.IntroCode.GDSkipObjects1);

gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDSkipObjects1Objects, runtimeScene, true, false);
}if (gdjs.IntroCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.IntroCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.IntroCode.eventsList3 = function(runtimeScene) {

{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("defaultcameradown").setNumber(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + 300);
}{runtimeScene.getVariables().get("defaultcameraup").setNumber(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("DefaultCameraReady"), true);
}}

}


{



}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
gdjs.IntroCode.condition1IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("cameraPos")) <= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("defaultcameradown"));
}if ( gdjs.IntroCode.condition0IsTrue_0.val ) {
{
gdjs.IntroCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().get("PerformTaskInfo"), false);
}}
if (gdjs.IntroCode.condition1IsTrue_0.val) {
{gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.func(runtimeScene, 0, "", "vertical", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{runtimeScene.getVariables().get("cameraPos").setNumber(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}{runtimeScene.getVariables().get("cameraPosUp").setNumber(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}}

}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
gdjs.IntroCode.condition1IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("cameraPos")) >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("defaultcameradown"));
}if ( gdjs.IntroCode.condition0IsTrue_0.val ) {
{
gdjs.IntroCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().get("PerformTaskInfo"), false);
}}
if (gdjs.IntroCode.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("defaultcameradown")), "", 0);
}{runtimeScene.getVariables().get("cameraPos").setNumber(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}}

}


{



}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("cameraPosUp")) <= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("defaultcameraup"));
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("defaultcameraup")), "", 0);
}{runtimeScene.getVariables().get("cameraPosUp").setNumber(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}}

}


};gdjs.IntroCode.eventsList4 = function(runtimeScene) {

{


gdjs.IntroCode.eventsList2(runtimeScene);
}


{


gdjs.IntroCode.eventsList3(runtimeScene);
}


{


{
}

}


};

gdjs.IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroCode.GDAvezzoLogoObjects1.length = 0;
gdjs.IntroCode.GDAvezzoLogoObjects2.length = 0;
gdjs.IntroCode.GDAvezzoLogoObjects3.length = 0;
gdjs.IntroCode.GDPopUpObjects1.length = 0;
gdjs.IntroCode.GDPopUpObjects2.length = 0;
gdjs.IntroCode.GDPopUpObjects3.length = 0;
gdjs.IntroCode.GDBackgroundObjects1.length = 0;
gdjs.IntroCode.GDBackgroundObjects2.length = 0;
gdjs.IntroCode.GDBackgroundObjects3.length = 0;
gdjs.IntroCode.GDNotificationBTNObjects1.length = 0;
gdjs.IntroCode.GDNotificationBTNObjects2.length = 0;
gdjs.IntroCode.GDNotificationBTNObjects3.length = 0;
gdjs.IntroCode.GDProfilePicSmallObjects1.length = 0;
gdjs.IntroCode.GDProfilePicSmallObjects2.length = 0;
gdjs.IntroCode.GDProfilePicSmallObjects3.length = 0;
gdjs.IntroCode.GDBottomContainterObjects1.length = 0;
gdjs.IntroCode.GDBottomContainterObjects2.length = 0;
gdjs.IntroCode.GDBottomContainterObjects3.length = 0;
gdjs.IntroCode.GDInviteObjects1.length = 0;
gdjs.IntroCode.GDInviteObjects2.length = 0;
gdjs.IntroCode.GDInviteObjects3.length = 0;
gdjs.IntroCode.GDLeaderboardBtnObjects1.length = 0;
gdjs.IntroCode.GDLeaderboardBtnObjects2.length = 0;
gdjs.IntroCode.GDLeaderboardBtnObjects3.length = 0;
gdjs.IntroCode.GDDashboardTNObjects1.length = 0;
gdjs.IntroCode.GDDashboardTNObjects2.length = 0;
gdjs.IntroCode.GDDashboardTNObjects3.length = 0;
gdjs.IntroCode.GDNoInternetTextObjects1.length = 0;
gdjs.IntroCode.GDNoInternetTextObjects2.length = 0;
gdjs.IntroCode.GDNoInternetTextObjects3.length = 0;
gdjs.IntroCode.GDNoInternetObjects1.length = 0;
gdjs.IntroCode.GDNoInternetObjects2.length = 0;
gdjs.IntroCode.GDNoInternetObjects3.length = 0;
gdjs.IntroCode.GDNoInternetBackgroundObjects1.length = 0;
gdjs.IntroCode.GDNoInternetBackgroundObjects2.length = 0;
gdjs.IntroCode.GDNoInternetBackgroundObjects3.length = 0;
gdjs.IntroCode.GDLoadingObjects1.length = 0;
gdjs.IntroCode.GDLoadingObjects2.length = 0;
gdjs.IntroCode.GDLoadingObjects3.length = 0;
gdjs.IntroCode.GDIntroObjects1.length = 0;
gdjs.IntroCode.GDIntroObjects2.length = 0;
gdjs.IntroCode.GDIntroObjects3.length = 0;
gdjs.IntroCode.GDIndicatorBackgroundObjects1.length = 0;
gdjs.IntroCode.GDIndicatorBackgroundObjects2.length = 0;
gdjs.IntroCode.GDIndicatorBackgroundObjects3.length = 0;
gdjs.IntroCode.GDSkipObjects1.length = 0;
gdjs.IntroCode.GDSkipObjects2.length = 0;
gdjs.IntroCode.GDSkipObjects3.length = 0;
gdjs.IntroCode.GDCreateAccountObjects1.length = 0;
gdjs.IntroCode.GDCreateAccountObjects2.length = 0;
gdjs.IntroCode.GDCreateAccountObjects3.length = 0;
gdjs.IntroCode.GDLoginObjects1.length = 0;
gdjs.IntroCode.GDLoginObjects2.length = 0;
gdjs.IntroCode.GDLoginObjects3.length = 0;
gdjs.IntroCode.GDnextObjects1.length = 0;
gdjs.IntroCode.GDnextObjects2.length = 0;
gdjs.IntroCode.GDnextObjects3.length = 0;

gdjs.IntroCode.eventsList4(runtimeScene);
return;

}

gdjs['IntroCode'] = gdjs.IntroCode;
