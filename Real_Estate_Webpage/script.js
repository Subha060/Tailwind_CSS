document.addEventListener("DOMContentLoaded", function() {
    // Your code here
let menu = document.querySelector(".menu");
let input_btn = document.querySelector(".input-btn");

if (menu && input_btn) {
    input_btn.addEventListener("change", function () {
        if (input_btn.checked == true) {
            menu.style.transform = "translateX(0%)";
            document.body.style.overflow = "hidden";
            
        }else {
            menu.style.transform = "translateX(100%)";
            document.body.style.overflow = "auto";
        }
    });
}
});
