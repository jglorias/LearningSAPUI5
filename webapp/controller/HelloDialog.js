sap.ui.define(
  [
    "sap/ui/base/ManagedObject",
    "sap/ui/core/Fragment",
    "sap/ui/core/syncStyleClass",
  ],
  function (ManagedObject, Fragment, syncStyleClass) {
    "use strict";

    return ManagedObject.extend("sap.ui.walkthrough.controller.HelloDialog", {
      constructor: function (oView) {
        this._oView = oView;
      },

      exit: function () {
        delete this._oView;
      },

      open: function () {
        var oView = this._oView;

        // create the dialog lazily (again)
        if (!oView.byId("helloDialog")) {
          var oFragmentController = {
            onCloseDialog: function () {
              oView.byId("helloDialog").close();
            },
          };

          // load asynchronous XML fragment
          Fragment.load({
            id: oView.getId(),
            name: "sap.ui.demo.walkthrough.view.HelloDialog",
            controller: oFragmentController,
          }).then(function (oDialog) {
            // Connect to RootView
            oView.addDependent(oDialog);
            //Forward Compact/Cozy Style in Dialogue
            syncStyleClass(
              oView
                .getController()
                .getOwnerComponent()
                .getContentDensityClass(),
              oView,
              oDialog
            );
            oDialog.open();
          });
        } else {
          oView.byId("helloDialog").open();
        }
      },
    });
  }
);
