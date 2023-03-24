sap.ui.define(
  [
    /*"sap/m/Text"For part one with only text, "sap/ui/core/mvc/XMLView" For component part deleting this*/
    "sap/ui/core/ComponentContainer",
  ],
  function (ComponentContainer) {
    "use strict";
    /*new Text({
    text: "Hello UI5!",
  }).placeAt("content"); *Make sure to function(Text)

    XMLView.create({
      viewName: "sap.ui.demo.walkthrough.view.App",
    }).then(function (oView) {
      oView.placeAt("content");
    });
    Deleting this as well for new parts. This is XMLModel As Return
    */
    new ComponentContainer({
      name: "sap.ui.demo.walkthrough",
      settings: {
        id: "walkthrough",
      },
      async: true,
    }).placeAt("content");
  }
);
