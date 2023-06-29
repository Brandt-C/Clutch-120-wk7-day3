/*
JavaScript and the DOM (document object model)
There are a TON of option for JS to 'listen to' HTML DOM interactions.
We can use JS to select, change, add, hide, remove elements on the page.
Because we're doing this through JS, it doesn't cause the page to reload!
*/

// selecting an element from html
console.log(document);

console.log(document.getElementsByTagName('h1')[0].id);
console.log(typeof document.getElementsByTagName('h1')[0].id);
console.log(document.getElementById('text').innerHTML);
console.log(document.querySelector('#text')); 
// when you use queryselector it grabs the first match it finds
// unless you use queryselectorall which returns an array/collection

// modification
setTimeout(() => {
    document.getElementById('text').innerHTML = 
    'THIS was changed with JAVASCRIPT!!!'}, 5000);

// eventlisteners --> we're going to use an EL to modify html with a func

// an EL is a JS function that looks for specific 
// behavior/events/userinteraction. . .  when the event happens we can use
// that as trigger for whatever we want to do.

// add a click EL to our button
// create a function to run when that happens

let changeColor = () => {
    let header = document.getElementById('text');

    !header.className ? header.className = 'color-change' :
    header.className === 'color-change' ? header.className = 'color-change1' :
    header.className = '';
    console.log(header.className);
}

//select the button 
let colorButton = document.getElementById('color-button');
console.log(colorButton);
colorButton.addEventListener('click', changeColor);

//  we're going to look at the simplest method of adding:
// document.<element>.append()

let newButton = document.createElement('button');
newButton.innerHTML = 'JS button';
document.body.append(newButton);

let addText = () => {
    let newText = document.createElement('h3');
    newText.innerHTML = 'Clutch can refer to many different things from items to sayings';
    document.body.append(newText);
}
newButton.addEventListener('mouseover', addText);

console.log(document.getElementsByTagName('button'));

// listen for submit
// function for that event

let formSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    let fname = event.target[0].value;
    let lname = event.target[1].value;
    console.log(`${fname} ${lname}`);

    let fnameq = document.querySelector('#first-name').value;
    let lnameq = document.querySelector('#last-name').value;
    console.log(`QUERYselector name: ${fnameq} ${lnameq}`);

    form.reset();

    let newElement = document.createElement('h3');
    newElement.innerHTML = fname + " " + lname;
    form.after(newElement);

}
let form = document.getElementById('name-form');
console.log(form);
form.addEventListener('submit', formSubmit)

