sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast", "sap/ui/core/Fragment"],
  function (Controller, MessageToast, Fragment) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.App", {
      onShowHello: function () {
        //Read Message from i18n Model
        var oBundle = this.getView().getModel("i18n").getResourceBundle();
        var sRecipient = this.getView()
          .getModel()
          .getProperty("/recipient/name"); //Comes from old JSON file
        var sMsg = oBundle.getText("helloMsg", [sRecipient]); //Comes from the i18n helloMsg property
        //Show Message
        MessageToast.show(sMsg);

        //alert("Hello there. This is triggered by the Button."); Other part that calls an alert
        //MessageToast.show("Hello there on Message Toast!"); //Message Toast is the notif on the bottom of the screen
      },
      onOpenDialog: function () {
        //     var oView = this.getView();
        //     //this is how to lazily create a dialogue
        //     if (!this.byId("helloDialog")) {
        //       //if this dialog does not exist..
        //       //load async the XML
        //       Fragment.load({
        //         id: oView.getId(),
        //         name: "sap.ui.demo.walkthrough.view.HelloDialog",
        //         controller: this,
        //       }).then(function (oDialog) {
        //         //Connect Dialog to Root --> Models, Lifecycle, etc.
        //         oView.addDependent(oDialog);
        //         oDialog.open();
        //       });
        //     } else {
        //       this.byId("helloDialog").open();
        //     }
        //   },
        //   onCloseDialog: function () {
        //     this.byId("helloDialog").close();
        //   },
        //MOVED TO BE REUSABLE IN COMPONENT.JS
        this.getOwnerComponent().openHelloDialog();
      },
    });
  }
);
