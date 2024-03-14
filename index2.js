// DOM - Part 2

// let _div = document.querySelector("div");
// console.log(div);

// // getAttribute
// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name);

// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));

// // setAttribite("old", "new");
// console.log(para.setAttribute("class", "newClass"));

// node.style
// let div = document.querySelector("div");

// div.style.backgroundColor = "green";
// div.style.backgroundColor = "purple";
// div.style.fontSize = "26px";
// div.innerText = "Hello!";

// Create Element
// let newBtn = document.createElement("button");
// newBtn.innerText = "click me!"
// console.log(newBtn);

// Insert Elements

// let div = document.querySelector("div");
// div.append(newBtn); adds element at the end(inside)
// div.prepend(newBtn); adds element at the start(inside)
// div.before(newBtn); adds element before(outside)
// div.after(newBtn); add element after(outside)

// let p = document.querySelector("p");
// p.append(newBtn);
// p.prepend(newBtn);
// p.before(newBtn);
// p.after(newBtn);

// let newHeading = document.createElement("h1");
// newHeading.innerHTML = "<i>Hi, I am new!</i>";
// document.querySelector("body").prepend(newHeading);  Selecting body and then adding newHeading before body

// let para = document.querySelector("p");
// para.remove();

// newHeading.remove();

// Practice Question 1: Create a new button element. Give it a text "click me", background color of red & text color of white.insert the button as the first element inside the body tag.

let newButton = document.createElement("button");
newButton.innerText = "click me!";
newButton.style.backgroundColor = "red";
newButton.style.color = "white";
document.querySelector("body").prepend(newButton);

/* Practice Question 2: Create a <p> tag in html, give it a class & some styling.
   Now create a new class in CSS and try to append this class to the <p> element.

   Did you notice, how you overwrite the class name when you add a new one?
   Solve this problem using classList */

   let para = document.querySelector("p")
   para.classList.add("newClass")

   // What i learned in this lecture
   
//     DOM (Document Object Model) is an important concept in JavaScript.
//     Accessing attributes using DOM methods in JavaScript
//     Accessing and manipulating the inline style of an element in JavaScript.
//     Changing CSS properties using JavaScript
//     Adding and positioning elements in the DOM using append, prepend, before, and after methods
//     Adding elements to the DOM using JavaScript
//     Creating a new button element and styling it
//     Adding styling to elements using JavaScript
//     Using class list to add and remove classes in JavaScript
//     Adding and removing classes in DOM allows for dynamic styling of elements.