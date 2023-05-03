// 3. Webiste Name: [Youtube Support](https://support.google.com/youtube/)

// ### Topics

//     - Get Element By Id, Create Element, Create Text Node, Append Child

//     ### Tasks

//      Add another FAQ 'My New FAQ' to the list

let store = document.querySelector(".article .accordion-homepage");
let card = document.createElement("section");
card.className = "parent";

let tag = document.createElement("h3");

card.appendChild(tag);

card.querySelector("h3").innerHTML = "My New FAQ";
store.appendChild(card);

// created own on the snapchat support website

// const store = document.querySelector(".homepage-nav-container");
// let list = document.createElement("li");
// list.className = "homepage-nav-item";

// let list1 = document.createElement("div");
// list1.className = "homepage-nav-title";

// let tag = document.createElement("h3");

// list1.appendChild(tag);

// list1.querySelector("h3").innerHTML = "snappppp";
// store.appendChild(list);
