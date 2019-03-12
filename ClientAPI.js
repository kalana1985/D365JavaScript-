// JavaScript source code
//Client API Provides methords and objects to Apply custom business logics using Javascript 
//we use client API to access the Form properties using JavaScript 
/* the client API contant fallowing objects
 * 
 * 1.executionContext
 * 2.FormContext
 * 3.gridContext
 * 4.XrmObject
 */

//execution context passes to your function by the platform, 
// it contain form information, run time info
//executionContext must pass as a perameter in afunction 

function displayHelloWorld(executionContext) {

    var formContext = executionContext.getFormContext();
}
// with in the displayHelloWorld function you have to diclaire a perameter by default 
// when you getting the form context you have to use executionContext methord before using getFormContext  methord

/*formContext*/
// formContext will give you the access to the form
//it has a 2 objects

/* Data object-  get teh data inside the element/attribute
   formContext.data.entity.attributes;
   */
/* UI object will give access to the form UI control
 
 formContext.ui.control;
 */
//BELOW EXAMPLE FOR ACCESSING AN ATTRIBUTE VALUE USING FORMCONTEXT

function getFirstName(executionContext)
{
    //below line is must
    var formContext = executionContext.getFormContext();
    var firstname = formContext.getAttribute("firstname").getValue();

    //TO GET UI CONTEXT

    //var firstname = formContext.getControl("firstname");

}


//Name Space Notation : below is the template for us eof function in JS with D365

var Sdk = window.Sdk || {};
(function () {

    //this code will return form onLoad event
    this.formOnload = function (executionContext)
    {
        //when using in event handler use  :  Sdk.formOnlode, as the function name
    }

    this.formOnSave = function (executionContext)
    {
        //using on event handler = Sdk.formOnSave

    }

   
}).call(Sdk);


//NOTIFICATIONS WITH JAVASCRIPT 
//1.FORM NOTIFICATION   2. FIELD NOTIFICATION
// when the formNotification is on your will able to save the form still, but when field notification was on you cat save the form
// when you set up field notification you have to set up the clear it after words using "if else" statemenst 

//FormNotification
to set = formContext.ui.setFormNotification(message, level, uniqueid);

to delete = formContext.ui.clearFormNotification(message, level, uniqueid);
//message= display message
//level=INFO, ERROR, WARNNING  Levels
//uniqueID= use when desebeling Notifications.

//FIELDnotifications
to set = formContext.getControl("attribute").setNotification(message, uniqueid);

to delete = formContext.getControl("attribute").clearNotification(message, uniqueid);



                  /*Disable Auto Save for Entity using JavaScript*/

// use below function for Disable auto-save for a form in spesific entity

function preventAutoSave(econtext) {
    var eventArgs = econtext.getEventArgs();
    if (eventArgs.getSaveMode() == 70 || eventArgs.getSaveMode() == 2) {
        eventArgs.preventDefault();
    }
}


//Handling Option sets using JavaScript 
var Sdk = window.Sdk || {};
(function () {

    //this code will return form onLoad event
    this.formOnload = function (executionContext) {
        //when using in event handler use  :  Sdk.formOnlode, as the function name
    }

    this.shippingMethordOnChange = function(executionContext) {
        //using on event handler = Sdk.formOnSave
        var formContext = executionContext.getFormContext();
        var shippingmethord = formContext.getAttribute("address1_shippingmethodcode").getText();// returen the string value 

        if (shippingmethord == "FedEx") {

            formContext.getControl("address1_freighttermscode").setDisabled(true);
        } else {

            formContext.getControl("address1_freighttermscode").setDisabled(false);


        }

    }


}).call(Sdk);


//Form Type

formContext.ui.getFormType();

/*Microsoft have defines the form types, for example form onSave will fire when you open an excisting record as well as the 
 * when you creating a new record, lest say you have to make some validation only when new record is created,not when exsisting 
 * record is opening .*/

Value	Form type
0	Undefined
1	Create
2	Update
3	Read Only
4	Disabled
6	Bulk Edit

Note

Quick Create forms return 1.


// JavaScript source code for get Fork Type
var Sdk = window.Sdk || {};
(function () {

    //this code will return form onLoad event
    this.formOnload = function (executionContext) {
        //when using in event handler use  :  Sdk.formOnlode, as the function name
        var formContext = executionContext.getFormContext();
        var getFormType = formContext.ui.getFormType();// this return the intiget value 

        if (getFormType == 1) {
            formContext.ui.setFormNotification("user is creating a new record", "INFO", "test1");

        } else if (getFormType == 2) {

            formContext.ui.setFormNotification("user is editing exsicting record ", "INFO", "test2");
        } else if (getFormType == 3) {
            formContext.ui.setFormNotification("user dont have permission to edit any record  ", "INFO", "test3");

        }

    }

    this.formOnSave = function (executionContext) {
        //using on event handler = Sdk.formOnSave

    }


}).call(Sdk);























