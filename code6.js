gdjs.Claim_32ReferralCode = {};
gdjs.Claim_32ReferralCode.GDAvezzoLogoObjects1= [];
gdjs.Claim_32ReferralCode.GDAvezzoLogoObjects2= [];
gdjs.Claim_32ReferralCode.GDPopUpObjects1= [];
gdjs.Claim_32ReferralCode.GDPopUpObjects2= [];
gdjs.Claim_32ReferralCode.GDBackgroundObjects1= [];
gdjs.Claim_32ReferralCode.GDBackgroundObjects2= [];
gdjs.Claim_32ReferralCode.GDNotificationBTNObjects1= [];
gdjs.Claim_32ReferralCode.GDNotificationBTNObjects2= [];
gdjs.Claim_32ReferralCode.GDProfilePicSmallObjects1= [];
gdjs.Claim_32ReferralCode.GDProfilePicSmallObjects2= [];
gdjs.Claim_32ReferralCode.GDBottomContainterObjects1= [];
gdjs.Claim_32ReferralCode.GDBottomContainterObjects2= [];
gdjs.Claim_32ReferralCode.GDInviteObjects1= [];
gdjs.Claim_32ReferralCode.GDInviteObjects2= [];
gdjs.Claim_32ReferralCode.GDLeaderboardBtnObjects1= [];
gdjs.Claim_32ReferralCode.GDLeaderboardBtnObjects2= [];
gdjs.Claim_32ReferralCode.GDDashboardTNObjects1= [];
gdjs.Claim_32ReferralCode.GDDashboardTNObjects2= [];
gdjs.Claim_32ReferralCode.GDNoInternetTextObjects1= [];
gdjs.Claim_32ReferralCode.GDNoInternetTextObjects2= [];
gdjs.Claim_32ReferralCode.GDNoInternetObjects1= [];
gdjs.Claim_32ReferralCode.GDNoInternetObjects2= [];
gdjs.Claim_32ReferralCode.GDNoInternetBackgroundObjects1= [];
gdjs.Claim_32ReferralCode.GDNoInternetBackgroundObjects2= [];
gdjs.Claim_32ReferralCode.GDLoadingObjects1= [];
gdjs.Claim_32ReferralCode.GDLoadingObjects2= [];
gdjs.Claim_32ReferralCode.GDContentObjects1= [];
gdjs.Claim_32ReferralCode.GDContentObjects2= [];
gdjs.Claim_32ReferralCode.GDCollectObjects1= [];
gdjs.Claim_32ReferralCode.GDCollectObjects2= [];

gdjs.Claim_32ReferralCode.conditionTrue_0 = {val:false};
gdjs.Claim_32ReferralCode.condition0IsTrue_0 = {val:false};
gdjs.Claim_32ReferralCode.condition1IsTrue_0 = {val:false};
gdjs.Claim_32ReferralCode.condition2IsTrue_0 = {val:false};
gdjs.Claim_32ReferralCode.conditionTrue_1 = {val:false};
gdjs.Claim_32ReferralCode.condition0IsTrue_1 = {val:false};
gdjs.Claim_32ReferralCode.condition1IsTrue_1 = {val:false};
gdjs.Claim_32ReferralCode.condition2IsTrue_1 = {val:false};


gdjs.Claim_32ReferralCode.mapOfGDgdjs_46Claim_9532ReferralCode_46GDCollectObjects1Objects = Hashtable.newFrom({"Collect": gdjs.Claim_32ReferralCode.GDCollectObjects1});gdjs.Claim_32ReferralCode.eventsList0 = function(runtimeScene) {

{


gdjs.Claim_32ReferralCode.condition0IsTrue_0.val = false;
gdjs.Claim_32ReferralCode.condition1IsTrue_0.val = false;
{
gdjs.Claim_32ReferralCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Claim_32ReferralCode.condition0IsTrue_0.val ) {
{
{gdjs.Claim_32ReferralCode.conditionTrue_1 = gdjs.Claim_32ReferralCode.condition1IsTrue_0;
gdjs.Claim_32ReferralCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17126268);
}
}}
if (gdjs.Claim_32ReferralCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Home", false);
}}

}


};gdjs.Claim_32ReferralCode.eventsList1 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Collect"), gdjs.Claim_32ReferralCode.GDCollectObjects1);
gdjs.copyArray(runtimeScene.getObjects("Content"), gdjs.Claim_32ReferralCode.GDContentObjects1);
{for(var i = 0, len = gdjs.Claim_32ReferralCode.GDContentObjects1.length ;i < len;++i) {
    gdjs.Claim_32ReferralCode.GDContentObjects1[i].setWidth(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene));
}
}{for(var i = 0, len = gdjs.Claim_32ReferralCode.GDContentObjects1.length ;i < len;++i) {
    gdjs.Claim_32ReferralCode.GDContentObjects1[i].setHeight(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
}{for(var i = 0, len = gdjs.Claim_32ReferralCode.GDCollectObjects1.length ;i < len;++i) {
    gdjs.Claim_32ReferralCode.GDCollectObjects1[i].setCenterPositionInScene((( gdjs.Claim_32ReferralCode.GDContentObjects1.length === 0 ) ? 0 :gdjs.Claim_32ReferralCode.GDContentObjects1[0].getPointX("Claim")),(( gdjs.Claim_32ReferralCode.GDContentObjects1.length === 0 ) ? 0 :gdjs.Claim_32ReferralCode.GDContentObjects1[0].getPointY("Claim")));
}
}{for(var i = 0, len = gdjs.Claim_32ReferralCode.GDCollectObjects1.length ;i < len;++i) {
    gdjs.Claim_32ReferralCode.GDCollectObjects1[i].setOpacity(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Collect"), gdjs.Claim_32ReferralCode.GDCollectObjects1);

gdjs.Claim_32ReferralCode.condition0IsTrue_0.val = false;
{
gdjs.Claim_32ReferralCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Claim_32ReferralCode.mapOfGDgdjs_46Claim_9532ReferralCode_46GDCollectObjects1Objects, runtimeScene, true, false);
}if (gdjs.Claim_32ReferralCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Claim_32ReferralCode.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{



}


};

gdjs.Claim_32ReferralCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Claim_32ReferralCode.GDAvezzoLogoObjects1.length = 0;
gdjs.Claim_32ReferralCode.GDAvezzoLogoObjects2.length = 0;
gdjs.Claim_32ReferralCode.GDPopUpObjects1.length = 0;
gdjs.Claim_32ReferralCode.GDPopUpObjects2.length = 0;
gdjs.Claim_32ReferralCode.GDBackgroundObjects1.length = 0;
gdjs.Claim_32ReferralCode.GDBackgroundObjects2.length = 0;
gdjs.Claim_32ReferralCode.GDNotificationBTNObjects1.length = 0;
gdjs.Claim_32ReferralCode.GDNotificationBTNObjects2.length = 0;
gdjs.Claim_32ReferralCode.GDProfilePicSmallObjects1.length = 0;
gdjs.Claim_32ReferralCode.GDProfilePicSmallObjects2.length = 0;
gdjs.Claim_32ReferralCode.GDBottomContainterObjects1.length = 0;
gdjs.Claim_32ReferralCode.GDBottomContainterObjects2.length = 0;
gdjs.Claim_32ReferralCode.GDInviteObjects1.length = 0;
gdjs.Claim_32ReferralCode.GDInviteObjects2.length = 0;
gdjs.Claim_32ReferralCode.GDLeaderboardBtnObjects1.length = 0;
gdjs.Claim_32ReferralCode.GDLeaderboardBtnObjects2.length = 0;
gdjs.Claim_32ReferralCode.GDDashboardTNObjects1.length = 0;
gdjs.Claim_32ReferralCode.GDDashboardTNObjects2.length = 0;
gdjs.Claim_32ReferralCode.GDNoInternetTextObjects1.length = 0;
gdjs.Claim_32ReferralCode.GDNoInternetTextObjects2.length = 0;
gdjs.Claim_32ReferralCode.GDNoInternetObjects1.length = 0;
gdjs.Claim_32ReferralCode.GDNoInternetObjects2.length = 0;
gdjs.Claim_32ReferralCode.GDNoInternetBackgroundObjects1.length = 0;
gdjs.Claim_32ReferralCode.GDNoInternetBackgroundObjects2.length = 0;
gdjs.Claim_32ReferralCode.GDLoadingObjects1.length = 0;
gdjs.Claim_32ReferralCode.GDLoadingObjects2.length = 0;
gdjs.Claim_32ReferralCode.GDContentObjects1.length = 0;
gdjs.Claim_32ReferralCode.GDContentObjects2.length = 0;
gdjs.Claim_32ReferralCode.GDCollectObjects1.length = 0;
gdjs.Claim_32ReferralCode.GDCollectObjects2.length = 0;

gdjs.Claim_32ReferralCode.eventsList1(runtimeScene);
return;

}

gdjs['Claim_32ReferralCode'] = gdjs.Claim_32ReferralCode;
