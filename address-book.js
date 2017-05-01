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

/*Add new contact*/
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

/*List function*/
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
