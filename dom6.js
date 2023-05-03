// 6. Webiste Name: [Adidas](https://www.adidas.co.in/)

// ### Topics

//     -   Query Selector, Event listeners, Changing Styles

// ### Sample Image

// ![Sample One](./Pic10.png)

// ### Tasks

//      Target the search box and on hover change thebackground color to red.

// ### Output

// ![Output](./Pic11.png)

const search = document.querySelector(".searchinput___19uW0")


search.addEventListener("mouseover", () => {
    search.style.backgroundColor = "Red"
})