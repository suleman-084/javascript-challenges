// 5. Webiste Name: [Samsung](https://www.samsung.com/in/offer/online/samsung-fest/)

// ### Topics

//        getElementById, createElement, InnerText, append, setAttribute

// ### Sample Image

// ![Sample One](./Pic8.png)

// ### Tasks

//      Target the main div of card and change the Button text to Check out

// ### Output

// ![Output](./Pic9.png)




let name = document.querySelectorAll(".mytabs .diwali-deals-product-sale-pro .diwali-deals-product-sale-btn")
name.forEach(el => {el.innerText = "checkout"})
