////        make printable string for console readout, recursively
var make_printable_object = function(ar_use)
{
////        internal arguments
var in_tab = arguments[1];
var st_return = arguments[2];
////        default vales when applicable
if (!in_tab) in_tab = 0;
if (!st_return) st_return = "";
////        add depth
var st_tab = "";
for (var i=0; i < in_tab; i++) st_tab = st_tab+"-~-~-";

////        traverse given depth and build string
for (var key in ar_use)
{
    ////        gather return type
    var st_returnType = typeof ar_use[key];
    ////        get current depth display
    var st_returnPrime = st_tab+ "["+key+"] ->"+ar_use[key]+"< is {"+st_returnType+"}"+ '<br>';
    ////        remove linefeeds to avoid printout confusion
    
    ////        add line feed
    st_return = st_return+st_returnPrime+"\n";
    ////         stop at a depth of 15
    if (in_tab>15) return st_return;
    ////        if current value is an object call this function
    if ( (typeof ar_use[key] == "object") & (ar_use[key] != "null") & (ar_use[key] != null) ) st_return = make_printable_object(ar_use[key], in_tab+1, st_return);


}

////        return complete output
return st_return;

};
////        END

////    Console log to HTML
(function () {
    var old_logger = console.log;
    var html_logger = document.getElementById('html_logger');
    console.log = function(msg) {
      old_logger.call(this, arguments);
      if (typeof msg == 'object') {
        html_logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(msg) : msg) + '<br>';
      } else {
        html_logger.innerHTML += msg + '<br>';
      }
    }
})();
////        END

var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

function add (firstName, lastName, phoneNumber, email) {
    contacts[contacts.length] = {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email
    };
}

function printPerson(person) {
    console.log(person.firstName + " - " + person.lastName + " - " + person.phoneNumber + " - " + person.email);
}

function list() {
    var contactsLength = contacts.length;
    for (var i = 0; i < contactsLength; i++) {
        printPerson(contacts[i]);
    }
}

/*Search function*/
function search(lastName) {
    var contactsLength = contacts.length;
    for (var i = 0; i < contactsLength; i++) {
        if (lastName === contacts[i].lastName) {
            printPerson(contacts[i]);
        }
    }
}

var myButton = document.querySelector('div > button#listButton');
myButton.onclick = function () {
	console.log("All Contacts...<br>");
    list(contacts);
    console.log("<br> ---- <br>");
};

var otherButton = document.querySelector('div > button#searchButton');
otherButton.onclick = function() {
    var userInput = prompt("Search for a contacts last name...").capitalizeFirstLetter();
    console.log("Showing Surname matches for..." + userInput + "<br>");
    search(userInput);
    console.log("<br> ---- <br>");
};

var newButton = document.querySelector('div > button#addButton');
newButton.onclick = function() {
    var firstNameInput = prompt("Add new contact", "First Name").capitalizeFirstLetter();
    var secondNameInput = prompt("Add new contact", "Second Name").capitalizeFirstLetter();
    var numberInput = prompt("Add new contact", "Phone Number");
    var emailInput = prompt("Add new contact", "E-Mail Address");
    add(firstNameInput, secondNameInput, numberInput, emailInput);
    alert("Contact Added!");
};

add("Han", "Solo", "123456", "falcon@space.com");
