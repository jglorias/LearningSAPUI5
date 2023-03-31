sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
  ],
  function (Controller, MessageToast, JSONModel, ResourceModel) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.App", {
      /*onInit: function () {
        //Initalization Event
        // Set data model on view in JSON format
        var oData = {
          recipient: {
            name: "Janet Gloria UI5",
          },
        };
        var oModel = new JSONModel(oData);
        this.getView().setModel(oModel);
        // Set i18n Model (Translatable)
        var i18nModel = new ResourceModel({
          bundleName: "sap.ui.demo.walkthrough.i18n.i18n",
          supportedLocales: [""],
          fallbackLocale: "",
        });
        this.getView().setModel(i18nModel, "i18n"); //Second part is just alias
      },
      MOVED TO COMPONENT.JS*/
      // onShowHello: function () {
      //   //Read Message from i18n Model
      //   var oBundle = this.getView().getModel("i18n").getResourceBundle();
      //   var sRecipient = this.getView()
      //     .getModel()
      //     .getProperty("/recipient/name"); //Comes from old JSON file
      //   var sMsg = oBundle.getText("helloMsg", [sRecipient]); //Comes from the i18n helloMsg property
      //   //Show Message
      //   MessageToast.show(sMsg);
      //   //Older code that will be good reference
      //   //alert("Hello there. This is triggered by the Button."); Other part that calls an alert
      //   //MessageToast.show("Hello there on Message Toast!"); //Message Toast is the notif on the bottom of the screen
      // },
      //MOVED TO HELLOPANEL.CONTROLLER.JS
      onInit: function () {
        this.getView().addStyleClass(
          this.getOwnerComponent().getContentDensityClass()
        );
      },
      onOpenDialog: function () {
        this.getOwnerComponent().openHelloDialog();
      },
      //We allowed to make this fragment be able to be called anywhere
    });
  }
);
