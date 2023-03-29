sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "./controller/HelloDialog",
  ],
  function (UIComponent, JSONModel, ResourceModel, HelloDialog) {
    "use strict";
    return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
      metadata: {
        // rootView: {
        //   viewName: "sap.ui.demo.walkthrough.view.App",
        //   type: "XML",
        //   async: true,
        //   id: "app", (We are referencing the Manifest instead after editing it to match these settings)

        manifest: "json",
      },
      init: function () {
        // //Calling the Init function of the Parent UI Component from SAP
        UIComponent.prototype.init.apply(this, arguments);
        // Setting the Data Models that was in App.controller.js with the JSON Model
        var oData = {
          recipient: {
            name: "UI5",
          },
        };
        var oModel = new JSONModel(oData);
        this.setModel(oModel);

        //Setting the Dialog
        this._helloDialog = new HelloDialog(this.getRootControl());

        //Setting the i18n Model
        // var i18nModel = new ResourceModel({
        //   bundleName: "sap.ui.demo.walkthrough.i18n.i18n",
        //   supportedLocales: [""],
        //   fallbackLocale: "",
        // });
        // this.setModel(i18nModel, "i18n");
        //MOVED TO MANIFEST.JSON
      },

      exit: function () {
        this._helloDialog.destroy();
        delete this._helloDialog;
      },
      //Just to clear stuff up

      openHelloDialog: function () {
        this._helloDialog.open();
      },
    });
  }
);
