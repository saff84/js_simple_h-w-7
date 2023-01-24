const links = document.querySelectorAll(".dropdown__link"),
    list = document.querySelector(".dropdown__list"),
    value = document.querySelector(".dropdown__value");

//     value.onclick = function () {
//     list.classList.add("dropdown__list_active");
//     list.style.width = "fit-content"
//     list.style.position = "initial"
//     list.style.margin = "0 auto"
// }



value.addEventListener("click", openMenu)

links.forEach((elem) => {

    elem.addEventListener("click", function (e) {
        value.textContent = this.textContent;
        list.classList.remove("dropdown__list_active");
        e.preventDefault()
    })
    // elem.onclick = function () {
    //     value.textContent = elem.textContent;
    //     list.classList.remove("dropdown__list_active");
    //     return false
    // }
})

function openMenu() {
    list.classList.add("dropdown__list_active");
    list.style.width = "fit-content"
    list.style.position = "initial"
    list.style.margin = "0 auto"
}

// function linkClick() {
//     value.textContent = this.textContent;
//     list.classList.remove("dropdown__list_active");
// }
