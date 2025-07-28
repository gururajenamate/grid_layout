sap.ui.define([
    "sap/ui/core/mvc/Controller",
    		'sap/ui/model/json/JSONModel'
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("gridlayout.controller.Main", {
        onInit() {
            let aJSONData = {
                AccountTitleS: "G&amp;A Rec: CRAD <br />Up to 20 characters",
                AccountTitleL: "G&amp;A Reclass: R&D Under Contr CRAD <br />Up to 50 characters",
                PurposeofAccount: `Some text <br />&#8226; Text 1 <br />
                                        &#8226; Text 2 <br />
                                        &#8226; Text 3 <br />
                                        &#8226; Text 4`
            };
            let oJSONModel = new JSONModel(aJSONData);
            this.getView().setModel(oJSONModel);
        },

        onRequestTypeChange: function(oEvent) {
            if(oEvent.getSource().getSelectedKey() === "value1") {
                this.getView().byId("RequestType1").setVisible(true);
                this.getView().byId("RequestType2").setVisible(false);
            }else {
                this.getView().byId("RequestType1").setVisible(false);
                this.getView().byId("RequestType2").setVisible(true);
            }
        },
        setQVisibility: function(oEvent) {
            debugger;
            this.getView().byId(oEvent.getSource().getId()+"_Q").setVisible(true);
        }   
    });
});