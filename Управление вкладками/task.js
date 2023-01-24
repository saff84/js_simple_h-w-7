const links = document.querySelectorAll(".tab"),
contents = document.querySelectorAll(".tab__content");

links.forEach((el, index) => {
    el.addEventListener("click", () =>{
        deleteActiviti()
        links[index].classList.add("tab_active")
        contents[index].classList.add("tab__content_active")
    })    
})

function deleteActiviti(){
    links.forEach((el)=>{
        el.classList.remove("tab_active")
    })
    contents.forEach((el)=>{
        el.classList.remove("tab__content_active")
    })
}