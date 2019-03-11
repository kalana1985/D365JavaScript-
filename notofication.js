// JavaScript source code
// JavaScript source code for setting and clearing notifications
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

        var expression = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

        if (!expression.test(phoneNumber)) {
          //for set field notifications
            formContext.getControl("telephone1").setNotification("Please add valide US phone number", "teliphonemessage");

            //for set form Notification
            formContext.ui.setFormNotification("i mean WTF", "WARNING", "test1");

        } else {

            //takes only one perameter which is the one you passes to set notification
            formContext.getControl("telephone1").clearNotification("teliphonemessage");

            //clear notification
            formContext.ui.clearFormNotification("test1");

        }


    }


}).call(Sdk);

