// Define a car object using a constructor function
function Car(id, car_make, car_model, car_year, car_type, car_color, car_price, car_mileage) {
	this.stockid = id;
	this.make = car_make;
	this.model = car_model;
	this.year = car_year;
	this.type = car_type;
	this.color = car_color;
	this.price = car_price;
	this.mileage = car_mileage;
	this.display = function () {
		var this_str = "<td>" + this.stockid + "</td><td>" + this.make + "</td>";
		this_str += "<td>" + this.model + "</td><td>" + this.year + "</td><td>" + this.type + "</td>";
		this_str += "<td>" + this.color + "</td><td> $" + this.price + "</td>";
		this_str += "<td>" + this.mileage + "</td>";
		return this_str;
	}
}


// Declare an array of objects
var car_list = [];  // var car_list = new Array();

// step 2. Use a for loop to read car info from web page
// and then create the Car object instances and 
// add individual car objects to the car_list array
var carlist = document.querySelectorAll('.car-item');
for (var i = 0; i < carlist.length; i++) {
	var id = document.getElementById('id-' + i).textContent;
	var car_make = document.getElementById('make-' + i).textContent;
	var car_model = document.getElementById('model-' + i).textContent;
	var car_year = document.getElementById('year-' + i).textContent;
	var car_type = document.getElementById('type-' + i).textContent;
	var car_color = document.getElementById('color-' + i).textContent;
	var car_price = parseFloat(document.getElementById('price-' + i).textContent);
	var car_mileage = document.getElementById('mileage-' + i).textContent;

	car_list.push(new Car(id, car_make, car_model, car_year, car_type, car_color, car_price, car_mileage));
}
console.log(car_list.length);

//step 3. apply event delegation for Add buttons
document.querySelector('table tbody').addEventListener('click', addItem, false);

//step 4. 
// define an array to hold the index of the car added to the shopping chart
var cart = [];

//This  function defines an event handler that adds a car to shopping cart
function addItem(e) {
	if (e.target.nodeName.toLowerCase() == 'button') {
		var index = e.target.value;
		addNewItemtoCart(car_list[index]);
	}
}

function addNewItemtoCart(item) {
	/* This function creates and adds a new table row to an existing table
	*/
	//create a new <tr> element: a table row
	var newTrElement = document.createElement('tr');

	// call createNewTdElement to create a <td> element using item.make as content
	var newTdElement = createNewTdElement(item.make);
	// append it to the new tr element
	newTrElement.appendChild(newTdElement);
	// call createNewTdElement to create a <td> element using item.model as content
	var newTdElement = createNewTdElement(item.model);
	// append it to the new tr element
	newTrElement.appendChild(newTdElement);

	// call createNewTdElement to create a <td> element using item.price as content
	var newTdElement = createNewTdElement(item.price);
	// append it to the new tr element
	newTrElement.appendChild(newTdElement);

	//append new <tr> element to the shopping cart
	document.getElementById('mycart').appendChild(newTrElement);
}

function createNewTdElement(cell_content) {
	/* This function creates and returns a new table cell using  the following steps:
	   1. create a new text node using createTextNode() method
	   2. create a new 'td' element using createElement() method
	   3. append the newly created text node to the new 'td' element
	   4. return the newly created 'td' element
	*/
	// create a text node
	var newTextNode = document.createTextNode(cell_content);
	// create a new td element
	var newTdElement = document.createElement('td');
	// append text node to the new td element
	newTdElement.appendChild(newTextNode);
	return newTdElement;
}

//step 5. 
/* add script code below to attach an event handler to the display minivan button*/
var minivanButton = document.getElementById('p2');
minivanButton.addEventListener('click', displayMinivan, false);



/* define displayMinivan function */
function displayMinivan() {
	for (var i = 0; i <= car_list.length; i++) {


	}
}

//step 6. 
/*add script code below to attach an event handler to the display invoice button*/
var invoiceButton = document.getElementById('p4');
invoiceButton.addEventListener('click', displayInvoice, false);

/* define displayInvoice function */
function displayInvoice() {
	var total_cars = 0;
	var subtotal = 0;
	var tax = 0.06;
	var regFee = 0.05;
	var total = 0;
	for (var i = 1; i <= cart.length; i++) {
		var qnt = document.getElementById('total-items' + i).value;
		qnt = parseInt(qnt);
		var price = document.getElementById('price-' + i).textContent
		price = parseFloat(price);
console.log(price);
console.log(qnt);
		subtotal += qnt * price;
		total_cars += qnt;
	}
	//calculates tax, registration fee, and final amount
	taxes = subtotal * tax;
	reg_fee = subtotal * regFee;
	total = taxes + reg_fee + subtotal;
	//display total
	document.getElementById('total-items').textContent = total_cars;

	//display total , tax, reg fee
	document.getElementById('taxes').textContent = "$" + taxes.toFixed(2);
	document.getElementById('registration').textContent = "$" + reg_fee.toFixed(2);
	document.getElementById('total').textContent = "$" + total.toFixed(2);

}