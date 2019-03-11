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





























