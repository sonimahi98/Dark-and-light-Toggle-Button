let background_box = document.querySelector(".background_box");
    let toggle_box = document.querySelector(".toggle_box");
    let circle = document.querySelector(".circle");
    let checkbox = document.getElementById("checkbox");

    toggle_box.onclick = function(){
        if(checkbox.checked){
            circle.style.transform = "translateX(100px)";
        }else{
            circle.style.transform = "translateX(0px)";
        }
    }