// 8. Webiste Name: [Google](https://www.google.com/)

// ### Topics

//        Remove Elements

// ### Sample Image

// ![Sample One](./Pic14.png)

// ### Tasks

//      Remove alternate languages from the home page languages listed

// ### Output

// ![Output](./Pic15.png)





const rem = document.querySelectorAll("#SIvCob a")
for(i=0; i<rem.length; i++){
    if (i % 2 == 0){
        rem[i].remove();
    }
}