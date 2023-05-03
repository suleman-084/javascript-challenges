// 10. Webiste Name: [Freecodecamp](https://www.freecodecamp.org/)

// ### Topics

//        querySelector, mouseover, click eventListener,  callback function, style,

// ### Sample Image

// ![Sample One](./Pic18.png)

// ### Tasks

//     Target the button and change background colour on mouseover

// ### Output

// ![Output](./Pic19.png)


const search = document.querySelector(".col-lg-8 .login-btn-text ")


search.addEventListener("mouseover", () => {
    search.style.backgroundColor = "Red"
})