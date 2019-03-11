function DisplayHelloWorld(anyParameter) {

    var formContext = executionContext.getFormContext();
    var firstName = formContext.getAttribute("firstname").getValue();
    alert("Hello World " + firstName);
}

var Sdk = window.Sdk || {};
(function () {

    //this code will return form onLoad event
    this.formOnload = function (executionContext) {
        //when using in event handler use  :  Sdk.formOnlode, as the function name
        var formContext = executionContext.getFormContext();
        var firstName = formContext.getAttribute("firstname").getValue();
        alert("Hello World " + firstName);
    }

    this.formOnSave = function (executionContext) {
        //using on event handler = Sdk.formOnSave

    }


}).call(Sdk);