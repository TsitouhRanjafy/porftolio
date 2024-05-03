
const baliseNavLinks = document.getElementById("nav_links");
const  balisefooter = document.getElementById("footer");
const  balisehamburger = document.getElementById("hamburger");
const  baliseProfile = document.getElementById("profile");
const  baliseMenus = document.querySelectorAll("div.navbar_menu a");



console.log(baliseMenus);
let close = true; 
balisehamburger.addEventListener("click",(e) =>{
    if (close){
        baliseNavLinks.classList.add("open");
        balisefooter.classList.add("open");
        balisehamburger.classList.add("open");
        close = false;
    }else{
        baliseNavLinks.classList.remove("open");
        balisefooter.classList.remove("open");
        balisehamburger.classList.remove("open");
        close = true;
    }
})

function removeUnderlineMenus(baliseMenus){
    for (let i=0;i<5;i++){
        if (baliseMenus[i].classList[1] == "underline"){
            baliseMenus[i].classList.remove("underline");
            break;
        }
    }
}
for (let i=0;i<5;i++){
    baliseMenus[i].addEventListener("click", ()=>{
        removeUnderlineMenus(baliseMenus);
        baliseMenus[i].classList.add("underline")
    }) 
}







