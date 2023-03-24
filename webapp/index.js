sap.ui.define(
  [/*"sap/m/Text"For part one with only text,*/ "sap/ui/core/mvc/XMLView"],
  function (XMLView) {
    "use strict";
    /*new Text({
    text: "Hello UI5!",
  }).placeAt("content"); *Make sure to function(Text)*/

    XMLView.create({
      viewName: "sap.ui.demo.walkthrough.view.App",
    }).then(function (oView) {
      oView.placeAt("content");
    });
  }
);
