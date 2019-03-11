// JavaScript source code
var Sdk = window.Sdk || {};
(function () {

    //this code will return form onLoad event
    this.formOnload = function (executionContext) {
        //when using in event handler use  :  Sdk.formOnlode, as the function name
    }

    this.formOnSave = function (executionContext) {
        //using on event handler = Sdk.formOnSave

    }
    this.phoneNumerOnChange = function (executionContext) {
        var formContext = executionContext.getFormContext();
        var phoneNumber = formContext.getAttribute("telephone1").getValue();

        //using reguler expression to check the valide phone number 

        var expression = new RegExp("((\(\d{ 3}\) ?) | (\d{ 3}-))?\d{ 3 } -\d{ 4 }");

        if (!expression.test(phoneNumber)) {

            alert("Please use valide US phone number")
        }


    }


}).call(Sdk);