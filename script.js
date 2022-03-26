let questions = document.querySelectorAll("#faq div div");
let questionsPara = document.querySelectorAll("#faq div div p");
let arrowSelect = document.querySelectorAll("#faq img");
let paraHidden = document.querySelectorAll(".detail")

for (let i = 0; i < arrowSelect.length; i++) {
    questions[i].addEventListener("click", function () {
        arrowSelect[i].classList.toggle("show");
        questionsPara[i].classList.toggle("bold");
        paraHidden[i].classList.toggle("hidden");
    })
}