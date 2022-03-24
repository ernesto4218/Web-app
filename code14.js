gdjs.JoinGCCode = {};
gdjs.JoinGCCode.GDAvezzoLogoObjects1= [];
gdjs.JoinGCCode.GDAvezzoLogoObjects2= [];
gdjs.JoinGCCode.GDAvezzoLogoObjects3= [];
gdjs.JoinGCCode.GDPopUpObjects1= [];
gdjs.JoinGCCode.GDPopUpObjects2= [];
gdjs.JoinGCCode.GDPopUpObjects3= [];
gdjs.JoinGCCode.GDBackgroundObjects1= [];
gdjs.JoinGCCode.GDBackgroundObjects2= [];
gdjs.JoinGCCode.GDBackgroundObjects3= [];
gdjs.JoinGCCode.GDNotificationBTNObjects1= [];
gdjs.JoinGCCode.GDNotificationBTNObjects2= [];
gdjs.JoinGCCode.GDNotificationBTNObjects3= [];
gdjs.JoinGCCode.GDProfilePicSmallObjects1= [];
gdjs.JoinGCCode.GDProfilePicSmallObjects2= [];
gdjs.JoinGCCode.GDProfilePicSmallObjects3= [];
gdjs.JoinGCCode.GDBottomContainterObjects1= [];
gdjs.JoinGCCode.GDBottomContainterObjects2= [];
gdjs.JoinGCCode.GDBottomContainterObjects3= [];
gdjs.JoinGCCode.GDInviteObjects1= [];
gdjs.JoinGCCode.GDInviteObjects2= [];
gdjs.JoinGCCode.GDInviteObjects3= [];
gdjs.JoinGCCode.GDLeaderboardBtnObjects1= [];
gdjs.JoinGCCode.GDLeaderboardBtnObjects2= [];
gdjs.JoinGCCode.GDLeaderboardBtnObjects3= [];
gdjs.JoinGCCode.GDDashboardTNObjects1= [];
gdjs.JoinGCCode.GDDashboardTNObjects2= [];
gdjs.JoinGCCode.GDDashboardTNObjects3= [];
gdjs.JoinGCCode.GDNoInternetTextObjects1= [];
gdjs.JoinGCCode.GDNoInternetTextObjects2= [];
gdjs.JoinGCCode.GDNoInternetTextObjects3= [];
gdjs.JoinGCCode.GDNoInternetObjects1= [];
gdjs.JoinGCCode.GDNoInternetObjects2= [];
gdjs.JoinGCCode.GDNoInternetObjects3= [];
gdjs.JoinGCCode.GDNoInternetBackgroundObjects1= [];
gdjs.JoinGCCode.GDNoInternetBackgroundObjects2= [];
gdjs.JoinGCCode.GDNoInternetBackgroundObjects3= [];
gdjs.JoinGCCode.GDLoadingObjects1= [];
gdjs.JoinGCCode.GDLoadingObjects2= [];
gdjs.JoinGCCode.GDLoadingObjects3= [];
gdjs.JoinGCCode.GDClaimObjects1= [];
gdjs.JoinGCCode.GDClaimObjects2= [];
gdjs.JoinGCCode.GDClaimObjects3= [];
gdjs.JoinGCCode.GDContentObjects1= [];
gdjs.JoinGCCode.GDContentObjects2= [];
gdjs.JoinGCCode.GDContentObjects3= [];
gdjs.JoinGCCode.GDClaimrewardObjects1= [];
gdjs.JoinGCCode.GDClaimrewardObjects2= [];
gdjs.JoinGCCode.GDClaimrewardObjects3= [];
gdjs.JoinGCCode.GDredeemObjects1= [];
gdjs.JoinGCCode.GDredeemObjects2= [];
gdjs.JoinGCCode.GDredeemObjects3= [];
gdjs.JoinGCCode.GDViewProfileObjects1= [];
gdjs.JoinGCCode.GDViewProfileObjects2= [];
gdjs.JoinGCCode.GDViewProfileObjects3= [];
gdjs.JoinGCCode.GDexitObjects1= [];
gdjs.JoinGCCode.GDexitObjects2= [];
gdjs.JoinGCCode.GDexitObjects3= [];
gdjs.JoinGCCode.GDGlobalIDObjects1= [];
gdjs.JoinGCCode.GDGlobalIDObjects2= [];
gdjs.JoinGCCode.GDGlobalIDObjects3= [];
gdjs.JoinGCCode.GDClaimBGObjects1= [];
gdjs.JoinGCCode.GDClaimBGObjects2= [];
gdjs.JoinGCCode.GDClaimBGObjects3= [];

gdjs.JoinGCCode.conditionTrue_0 = {val:false};
gdjs.JoinGCCode.condition0IsTrue_0 = {val:false};
gdjs.JoinGCCode.condition1IsTrue_0 = {val:false};
gdjs.JoinGCCode.condition2IsTrue_0 = {val:false};
gdjs.JoinGCCode.condition3IsTrue_0 = {val:false};
gdjs.JoinGCCode.condition4IsTrue_0 = {val:false};
gdjs.JoinGCCode.condition5IsTrue_0 = {val:false};
gdjs.JoinGCCode.conditionTrue_1 = {val:false};
gdjs.JoinGCCode.condition0IsTrue_1 = {val:false};
gdjs.JoinGCCode.condition1IsTrue_1 = {val:false};
gdjs.JoinGCCode.condition2IsTrue_1 = {val:false};
gdjs.JoinGCCode.condition3IsTrue_1 = {val:false};
gdjs.JoinGCCode.condition4IsTrue_1 = {val:false};
gdjs.JoinGCCode.condition5IsTrue_1 = {val:false};


gdjs.JoinGCCode.eventsList0 = function(runtimeScene) {

{


gdjs.JoinGCCode.condition0IsTrue_0.val = false;
{
gdjs.JoinGCCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.JoinGCCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("defaultcameradown").setNumber(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + 800);
}{runtimeScene.getVariables().get("defaultcameraup").setNumber(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("DefaultCameraReady"), true);
}}

}


{



}


{


gdjs.JoinGCCode.condition0IsTrue_0.val = false;
{
gdjs.JoinGCCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("cameraPos")) <= 1900;
}if (gdjs.JoinGCCode.condition0IsTrue_0.val) {
{gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.func(runtimeScene, 0, "", "vertical", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{runtimeScene.getVariables().get("cameraPos").setNumber(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}{runtimeScene.getVariables().get("cameraPosUp").setNumber(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}{/* Unknown object - skipped. */}}

}


{


gdjs.JoinGCCode.condition0IsTrue_0.val = false;
{
gdjs.JoinGCCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("cameraPos")) >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("defaultcameradown"));
}if (gdjs.JoinGCCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("defaultcameradown")), "", 0);
}{runtimeScene.getVariables().get("cameraPos").setNumber(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}}

}


{



}


{


gdjs.JoinGCCode.condition0IsTrue_0.val = false;
{
gdjs.JoinGCCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("cameraPosUp")) <= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("defaultcameraup"));
}if (gdjs.JoinGCCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("defaultcameraup")), "", 0);
}{runtimeScene.getVariables().get("cameraPosUp").setNumber(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}}

}


{


{
}

}


};gdjs.JoinGCCode.mapOfGDgdjs_46JoinGCCode_46GDexitObjects1Objects = Hashtable.newFrom({"exit": gdjs.JoinGCCode.GDexitObjects1});gdjs.JoinGCCode.mapOfGDgdjs_46JoinGCCode_46GDredeemObjects1Objects = Hashtable.newFrom({"redeem": gdjs.JoinGCCode.GDredeemObjects1});gdjs.JoinGCCode.mapOfGDgdjs_46JoinGCCode_46GDClaimrewardObjects1Objects = Hashtable.newFrom({"Claimreward": gdjs.JoinGCCode.GDClaimrewardObjects1});gdjs.JoinGCCode.mapOfGDgdjs_46JoinGCCode_46GDredeemObjects1Objects = Hashtable.newFrom({"redeem": gdjs.JoinGCCode.GDredeemObjects1});gdjs.JoinGCCode.mapOfGDgdjs_46JoinGCCode_46GDViewProfileObjects1Objects = Hashtable.newFrom({"ViewProfile": gdjs.JoinGCCode.GDViewProfileObjects1});gdjs.JoinGCCode.eventsList1 = function(runtimeScene) {

{


gdjs.JoinGCCode.eventsList0(runtimeScene);
}


{


gdjs.JoinGCCode.condition0IsTrue_0.val = false;
{
gdjs.JoinGCCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.JoinGCCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("GlobalID"), gdjs.JoinGCCode.GDGlobalIDObjects1);
gdjs.copyArray(runtimeScene.getObjects("ViewProfile"), gdjs.JoinGCCode.GDViewProfileObjects1);
gdjs.copyArray(runtimeScene.getObjects("exit"), gdjs.JoinGCCode.GDexitObjects1);
gdjs.copyArray(runtimeScene.getObjects("redeem"), gdjs.JoinGCCode.GDredeemObjects1);
{for(var i = 0, len = gdjs.JoinGCCode.GDexitObjects1.length ;i < len;++i) {
    gdjs.JoinGCCode.GDexitObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.JoinGCCode.GDredeemObjects1.length ;i < len;++i) {
    gdjs.JoinGCCode.GDredeemObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.JoinGCCode.GDViewProfileObjects1.length ;i < len;++i) {
    gdjs.JoinGCCode.GDViewProfileObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.JoinGCCode.GDGlobalIDObjects1.length ;i < len;++i) {
    gdjs.JoinGCCode.GDGlobalIDObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("GlobalID")));
}
}{gdjs.evtTools.firebaseTools.firestore.getField("users", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "ProfileInfo.GCadded", runtimeScene.getVariables().get("GCadded"), runtimeScene.getVariables().get("GCaddedStatus"));
}}

}


{



}


{


gdjs.JoinGCCode.condition0IsTrue_0.val = false;
gdjs.JoinGCCode.condition1IsTrue_0.val = false;
{
gdjs.JoinGCCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("GCadded")) != "true";
}if ( gdjs.JoinGCCode.condition0IsTrue_0.val ) {
{
gdjs.JoinGCCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("GCaddedStatus")) == "ok";
}}
if (gdjs.JoinGCCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Content"), gdjs.JoinGCCode.GDContentObjects1);
gdjs.copyArray(runtimeScene.getObjects("GlobalID"), gdjs.JoinGCCode.GDGlobalIDObjects1);
{for(var i = 0, len = gdjs.JoinGCCode.GDContentObjects1.length ;i < len;++i) {
    gdjs.JoinGCCode.GDContentObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.JoinGCCode.GDGlobalIDObjects1.length ;i < len;++i) {
    gdjs.JoinGCCode.GDGlobalIDObjects1[i].setTextAlignment("center");
}
}{for(var i = 0, len = gdjs.JoinGCCode.GDGlobalIDObjects1.length ;i < len;++i) {
    gdjs.JoinGCCode.GDGlobalIDObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.JoinGCCode.GDGlobalIDObjects1.length ;i < len;++i) {
    gdjs.JoinGCCode.GDGlobalIDObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("GlobalID")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Content"), gdjs.JoinGCCode.GDContentObjects1);

gdjs.JoinGCCode.condition0IsTrue_0.val = false;
gdjs.JoinGCCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.JoinGCCode.GDContentObjects1.length;i<l;++i) {
    if ( gdjs.JoinGCCode.GDContentObjects1[i].getAnimation() == 0 ) {
        gdjs.JoinGCCode.condition0IsTrue_0.val = true;
        gdjs.JoinGCCode.GDContentObjects1[k] = gdjs.JoinGCCode.GDContentObjects1[i];
        ++k;
    }
}
gdjs.JoinGCCode.GDContentObjects1.length = k;}if ( gdjs.JoinGCCode.condition0IsTrue_0.val ) {
{
{gdjs.JoinGCCode.conditionTrue_1 = gdjs.JoinGCCode.condition1IsTrue_0;
gdjs.JoinGCCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(19416652);
}
}}
if (gdjs.JoinGCCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("exit"), gdjs.JoinGCCode.GDexitObjects1);
gdjs.copyArray(runtimeScene.getObjects("redeem"), gdjs.JoinGCCode.GDredeemObjects1);
{for(var i = 0, len = gdjs.JoinGCCode.GDexitObjects1.length ;i < len;++i) {
    gdjs.JoinGCCode.GDexitObjects1[i].setX(947);
}
}{for(var i = 0, len = gdjs.JoinGCCode.GDredeemObjects1.length ;i < len;++i) {
    gdjs.JoinGCCode.GDredeemObjects1[i].setX(-(2000));
}
}}

}


{



}


{


gdjs.JoinGCCode.condition0IsTrue_0.val = false;
gdjs.JoinGCCode.condition1IsTrue_0.val = false;
{
gdjs.JoinGCCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("GCadded")) == "true";
}if ( gdjs.JoinGCCode.condition0IsTrue_0.val ) {
{
gdjs.JoinGCCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("GCaddedStatus")) == "ok";
}}
if (gdjs.JoinGCCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Content"), gdjs.JoinGCCode.GDContentObjects1);
gdjs.copyArray(runtimeScene.getObjects("GlobalID"), gdjs.JoinGCCode.GDGlobalIDObjects1);
{for(var i = 0, len = gdjs.JoinGCCode.GDContentObjects1.length ;i < len;++i) {
    gdjs.JoinGCCode.GDContentObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.JoinGCCode.GDGlobalIDObjects1.length ;i < len;++i) {
    gdjs.JoinGCCode.GDGlobalIDObjects1[i].setTextAlignment("center");
}
}{for(var i = 0, len = gdjs.JoinGCCode.GDGlobalIDObjects1.length ;i < len;++i) {
    gdjs.JoinGCCode.GDGlobalIDObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.JoinGCCode.GDGlobalIDObjects1.length ;i < len;++i) {
    gdjs.JoinGCCode.GDGlobalIDObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("GlobalID")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Content"), gdjs.JoinGCCode.GDContentObjects1);

gdjs.JoinGCCode.condition0IsTrue_0.val = false;
gdjs.JoinGCCode.condition1IsTrue_0.val = false;
gdjs.JoinGCCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.JoinGCCode.GDContentObjects1.length;i<l;++i) {
    if ( gdjs.JoinGCCode.GDContentObjects1[i].getAnimation() == 1 ) {
        gdjs.JoinGCCode.condition0IsTrue_0.val = true;
        gdjs.JoinGCCode.GDContentObjects1[k] = gdjs.JoinGCCode.GDContentObjects1[i];
        ++k;
    }
}
gdjs.JoinGCCode.GDContentObjects1.length = k;}if ( gdjs.JoinGCCode.condition0IsTrue_0.val ) {
{
gdjs.JoinGCCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("GCaddedStatus")) == "ok";
}if ( gdjs.JoinGCCode.condition1IsTrue_0.val ) {
{
{gdjs.JoinGCCode.conditionTrue_1 = gdjs.JoinGCCode.condition2IsTrue_0;
gdjs.JoinGCCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(19420700);
}
}}
}
if (gdjs.JoinGCCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("redeem"), gdjs.JoinGCCode.GDredeemObjects1);
{for(var i = 0, len = gdjs.JoinGCCode.GDredeemObjects1.length ;i < len;++i) {
    gdjs.JoinGCCode.GDredeemObjects1[i].setX(108);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("exit"), gdjs.JoinGCCode.GDexitObjects1);

gdjs.JoinGCCode.condition0IsTrue_0.val = false;
gdjs.JoinGCCode.condition1IsTrue_0.val = false;
gdjs.JoinGCCode.condition2IsTrue_0.val = false;
{
gdjs.JoinGCCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.JoinGCCode.mapOfGDgdjs_46JoinGCCode_46GDexitObjects1Objects, runtimeScene, true, false);
}if ( gdjs.JoinGCCode.condition0IsTrue_0.val ) {
{
gdjs.JoinGCCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.JoinGCCode.condition1IsTrue_0.val ) {
{
{gdjs.JoinGCCode.conditionTrue_1 = gdjs.JoinGCCode.condition2IsTrue_0;
gdjs.JoinGCCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(19422604);
}
}}
}
if (gdjs.JoinGCCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Home");
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("redeem"), gdjs.JoinGCCode.GDredeemObjects1);

gdjs.JoinGCCode.condition0IsTrue_0.val = false;
gdjs.JoinGCCode.condition1IsTrue_0.val = false;
gdjs.JoinGCCode.condition2IsTrue_0.val = false;
{
gdjs.JoinGCCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.JoinGCCode.mapOfGDgdjs_46JoinGCCode_46GDredeemObjects1Objects, runtimeScene, true, false);
}if ( gdjs.JoinGCCode.condition0IsTrue_0.val ) {
{
gdjs.JoinGCCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.JoinGCCode.condition1IsTrue_0.val ) {
{
{gdjs.JoinGCCode.conditionTrue_1 = gdjs.JoinGCCode.condition2IsTrue_0;
gdjs.JoinGCCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(19424116);
}
}}
}
if (gdjs.JoinGCCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Claim"), gdjs.JoinGCCode.GDClaimObjects1);
gdjs.copyArray(runtimeScene.getObjects("ClaimBG"), gdjs.JoinGCCode.GDClaimBGObjects1);
gdjs.copyArray(runtimeScene.getObjects("Claimreward"), gdjs.JoinGCCode.GDClaimrewardObjects1);
{for(var i = 0, len = gdjs.JoinGCCode.GDClaimObjects1.length ;i < len;++i) {
    gdjs.JoinGCCode.GDClaimObjects1[i].setX(0);
}
}{for(var i = 0, len = gdjs.JoinGCCode.GDClaimBGObjects1.length ;i < len;++i) {
    gdjs.JoinGCCode.GDClaimBGObjects1[i].setX(0);
}
}{for(var i = 0, len = gdjs.JoinGCCode.GDClaimrewardObjects1.length ;i < len;++i) {
    gdjs.JoinGCCode.GDClaimrewardObjects1[i].setX(116);
}
}{for(var i = 0, len = gdjs.JoinGCCode.GDClaimrewardObjects1.length ;i < len;++i) {
    gdjs.JoinGCCode.GDClaimrewardObjects1[i].setOpacity(0);
}
}{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("defaultcameraup")), "", 0);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Claim"), gdjs.JoinGCCode.GDClaimObjects1);
gdjs.copyArray(runtimeScene.getObjects("Claimreward"), gdjs.JoinGCCode.GDClaimrewardObjects1);
gdjs.copyArray(runtimeScene.getObjects("redeem"), gdjs.JoinGCCode.GDredeemObjects1);

gdjs.JoinGCCode.condition0IsTrue_0.val = false;
gdjs.JoinGCCode.condition1IsTrue_0.val = false;
gdjs.JoinGCCode.condition2IsTrue_0.val = false;
gdjs.JoinGCCode.condition3IsTrue_0.val = false;
gdjs.JoinGCCode.condition4IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.JoinGCCode.GDClaimObjects1.length;i<l;++i) {
    if ( gdjs.JoinGCCode.GDClaimObjects1[i].getX() == 0 ) {
        gdjs.JoinGCCode.condition0IsTrue_0.val = true;
        gdjs.JoinGCCode.GDClaimObjects1[k] = gdjs.JoinGCCode.GDClaimObjects1[i];
        ++k;
    }
}
gdjs.JoinGCCode.GDClaimObjects1.length = k;}if ( gdjs.JoinGCCode.condition0IsTrue_0.val ) {
{
gdjs.JoinGCCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.JoinGCCode.mapOfGDgdjs_46JoinGCCode_46GDClaimrewardObjects1Objects, runtimeScene, true, false);
}if ( gdjs.JoinGCCode.condition1IsTrue_0.val ) {
{
gdjs.JoinGCCode.condition2IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.JoinGCCode.mapOfGDgdjs_46JoinGCCode_46GDredeemObjects1Objects, runtimeScene, true, true);
}if ( gdjs.JoinGCCode.condition2IsTrue_0.val ) {
{
gdjs.JoinGCCode.condition3IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.JoinGCCode.condition3IsTrue_0.val ) {
{
{gdjs.JoinGCCode.conditionTrue_1 = gdjs.JoinGCCode.condition4IsTrue_0;
gdjs.JoinGCCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(19428132);
}
}}
}
}
}
if (gdjs.JoinGCCode.condition4IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Home");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Claim"), gdjs.JoinGCCode.GDClaimObjects1);

gdjs.JoinGCCode.condition0IsTrue_0.val = false;
gdjs.JoinGCCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.JoinGCCode.GDClaimObjects1.length;i<l;++i) {
    if ( gdjs.JoinGCCode.GDClaimObjects1[i].getX() == 0 ) {
        gdjs.JoinGCCode.condition0IsTrue_0.val = true;
        gdjs.JoinGCCode.GDClaimObjects1[k] = gdjs.JoinGCCode.GDClaimObjects1[i];
        ++k;
    }
}
gdjs.JoinGCCode.GDClaimObjects1.length = k;}if ( gdjs.JoinGCCode.condition0IsTrue_0.val ) {
{
{gdjs.JoinGCCode.conditionTrue_1 = gdjs.JoinGCCode.condition1IsTrue_0;
gdjs.JoinGCCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(19428836);
}
}}
if (gdjs.JoinGCCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("redeem"), gdjs.JoinGCCode.GDredeemObjects1);
{for(var i = 0, len = gdjs.JoinGCCode.GDredeemObjects1.length ;i < len;++i) {
    gdjs.JoinGCCode.GDredeemObjects1[i].setX(-(2000));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("ViewProfile"), gdjs.JoinGCCode.GDViewProfileObjects1);

gdjs.JoinGCCode.condition0IsTrue_0.val = false;
gdjs.JoinGCCode.condition1IsTrue_0.val = false;
gdjs.JoinGCCode.condition2IsTrue_0.val = false;
{
gdjs.JoinGCCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.JoinGCCode.mapOfGDgdjs_46JoinGCCode_46GDViewProfileObjects1Objects, runtimeScene, true, false);
}if ( gdjs.JoinGCCode.condition0IsTrue_0.val ) {
{
gdjs.JoinGCCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.JoinGCCode.condition1IsTrue_0.val ) {
{
{gdjs.JoinGCCode.conditionTrue_1 = gdjs.JoinGCCode.condition2IsTrue_0;
gdjs.JoinGCCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(19430644);
}
}}
}
if (gdjs.JoinGCCode.condition2IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://www.facebook.com/profile.php?id=100073624475167", runtimeScene);
}}

}


};

gdjs.JoinGCCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.JoinGCCode.GDAvezzoLogoObjects1.length = 0;
gdjs.JoinGCCode.GDAvezzoLogoObjects2.length = 0;
gdjs.JoinGCCode.GDAvezzoLogoObjects3.length = 0;
gdjs.JoinGCCode.GDPopUpObjects1.length = 0;
gdjs.JoinGCCode.GDPopUpObjects2.length = 0;
gdjs.JoinGCCode.GDPopUpObjects3.length = 0;
gdjs.JoinGCCode.GDBackgroundObjects1.length = 0;
gdjs.JoinGCCode.GDBackgroundObjects2.length = 0;
gdjs.JoinGCCode.GDBackgroundObjects3.length = 0;
gdjs.JoinGCCode.GDNotificationBTNObjects1.length = 0;
gdjs.JoinGCCode.GDNotificationBTNObjects2.length = 0;
gdjs.JoinGCCode.GDNotificationBTNObjects3.length = 0;
gdjs.JoinGCCode.GDProfilePicSmallObjects1.length = 0;
gdjs.JoinGCCode.GDProfilePicSmallObjects2.length = 0;
gdjs.JoinGCCode.GDProfilePicSmallObjects3.length = 0;
gdjs.JoinGCCode.GDBottomContainterObjects1.length = 0;
gdjs.JoinGCCode.GDBottomContainterObjects2.length = 0;
gdjs.JoinGCCode.GDBottomContainterObjects3.length = 0;
gdjs.JoinGCCode.GDInviteObjects1.length = 0;
gdjs.JoinGCCode.GDInviteObjects2.length = 0;
gdjs.JoinGCCode.GDInviteObjects3.length = 0;
gdjs.JoinGCCode.GDLeaderboardBtnObjects1.length = 0;
gdjs.JoinGCCode.GDLeaderboardBtnObjects2.length = 0;
gdjs.JoinGCCode.GDLeaderboardBtnObjects3.length = 0;
gdjs.JoinGCCode.GDDashboardTNObjects1.length = 0;
gdjs.JoinGCCode.GDDashboardTNObjects2.length = 0;
gdjs.JoinGCCode.GDDashboardTNObjects3.length = 0;
gdjs.JoinGCCode.GDNoInternetTextObjects1.length = 0;
gdjs.JoinGCCode.GDNoInternetTextObjects2.length = 0;
gdjs.JoinGCCode.GDNoInternetTextObjects3.length = 0;
gdjs.JoinGCCode.GDNoInternetObjects1.length = 0;
gdjs.JoinGCCode.GDNoInternetObjects2.length = 0;
gdjs.JoinGCCode.GDNoInternetObjects3.length = 0;
gdjs.JoinGCCode.GDNoInternetBackgroundObjects1.length = 0;
gdjs.JoinGCCode.GDNoInternetBackgroundObjects2.length = 0;
gdjs.JoinGCCode.GDNoInternetBackgroundObjects3.length = 0;
gdjs.JoinGCCode.GDLoadingObjects1.length = 0;
gdjs.JoinGCCode.GDLoadingObjects2.length = 0;
gdjs.JoinGCCode.GDLoadingObjects3.length = 0;
gdjs.JoinGCCode.GDClaimObjects1.length = 0;
gdjs.JoinGCCode.GDClaimObjects2.length = 0;
gdjs.JoinGCCode.GDClaimObjects3.length = 0;
gdjs.JoinGCCode.GDContentObjects1.length = 0;
gdjs.JoinGCCode.GDContentObjects2.length = 0;
gdjs.JoinGCCode.GDContentObjects3.length = 0;
gdjs.JoinGCCode.GDClaimrewardObjects1.length = 0;
gdjs.JoinGCCode.GDClaimrewardObjects2.length = 0;
gdjs.JoinGCCode.GDClaimrewardObjects3.length = 0;
gdjs.JoinGCCode.GDredeemObjects1.length = 0;
gdjs.JoinGCCode.GDredeemObjects2.length = 0;
gdjs.JoinGCCode.GDredeemObjects3.length = 0;
gdjs.JoinGCCode.GDViewProfileObjects1.length = 0;
gdjs.JoinGCCode.GDViewProfileObjects2.length = 0;
gdjs.JoinGCCode.GDViewProfileObjects3.length = 0;
gdjs.JoinGCCode.GDexitObjects1.length = 0;
gdjs.JoinGCCode.GDexitObjects2.length = 0;
gdjs.JoinGCCode.GDexitObjects3.length = 0;
gdjs.JoinGCCode.GDGlobalIDObjects1.length = 0;
gdjs.JoinGCCode.GDGlobalIDObjects2.length = 0;
gdjs.JoinGCCode.GDGlobalIDObjects3.length = 0;
gdjs.JoinGCCode.GDClaimBGObjects1.length = 0;
gdjs.JoinGCCode.GDClaimBGObjects2.length = 0;
gdjs.JoinGCCode.GDClaimBGObjects3.length = 0;

gdjs.JoinGCCode.eventsList1(runtimeScene);
return;

}

gdjs['JoinGCCode'] = gdjs.JoinGCCode;
