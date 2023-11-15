const btn_menuBar=document.querySelector(".btn-menuBar")
const navMenu=document.querySelector(".navMenu")
btn_menuBar.addEventListener("click",function() {
    navMenu.classList.toggle("show")
})

let icon=document.querySelector(".fa-bag-shopping")
let asidebar=document.querySelector(".aside-bar")
let closeBtn=document.querySelector(".fa-xmark")
icon.addEventListener("click",function() {
    asidebar.classList.add("show-aside")
})
closeBtn.addEventListener("click",function() {
    asidebar.classList.remove("show-aside")
})