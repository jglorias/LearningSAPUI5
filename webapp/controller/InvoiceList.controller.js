sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    // Filter and FilterOperator is for search
  ],
  function (Controller, JSONModel, formatter, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("sap.ui.demo.walkthrough.controller.InvoiceList", {
      formatter: formatter,
      onInit: function () {
        var oViewModel = new JSONModel({
          currency: "EUR",
        });
        this.getView().setModel(oViewModel, "view");
      },
      onFilterInvoices: function (oEvent) {
        //Making a Filter array
        //Pulling data from triggered event, and then put into a filter query and then store inside this array

        var aFilter = [];
        var sQuery = oEvent.getParameter("query");
        if (sQuery) {
          aFilter.push(
            new Filter("ProductName", FilterOperator.Contains, sQuery)
          );
        }
        //If there is something in the query, make a new filter for the ProductName, and the FilterOperator must contain what they typed in the search bar, and then query.

        // filter binding
        var oList = this.byId("invoiceList");
        //When you bound model to list, it's bound in items section
        var oBinding = oList.getBinding("items");
        oBinding.filter(aFilter);
      },
      //Press button on Invoice List, route it to somewhere else.

      onPress: function (oEvent) {
        var oItem = oEvent.getSource();
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        oRouter.navTo("detail", {
          invoicePath: window.encodeURIComponent(
            oItem.getBindingContext("invoice").getPath().substr(1)
          ),
        });
      },
    });
  }
);
