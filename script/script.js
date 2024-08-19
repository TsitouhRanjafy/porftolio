const baliseNavLinks = document.getElementById("nav_links");
const balisefooter = document.getElementById("footer");
const balisehamburger = document.getElementById("hamburger");
const baliseProfile = document.getElementById("profile");
const baliseImage = document.getElementById("image");
const baliseMenus = document.querySelectorAll("div.navbar_menu a");
const baliseHeader = document.querySelector("header");
const baliseBody = document.querySelector("body");
const progressBar = document.getElementById("progressBar");
const containerCard = document.getElementById('containerCard');
const allCard = document.querySelectorAll('.projetView');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const tableTr = document.querySelectorAll("#tr");
const skillsProgres = document.querySelectorAll('.progress');

// hamburger
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
});
// function qui suprimer underline
function removeUnderlineMenus(baliseMenus){
    for (let i=0;i<5;i++){
        if (baliseMenus[i].classList[1] == "underline"){
            baliseMenus[i].classList.remove("underline");
            break;
        }
    }
}
function removeActive(baliseMenus){
    for (let i=0;i<5;i++){
        if (baliseMenus[i].classList[1] == "active"){
            baliseMenus[i].classList.remove("active");
            break;
        }
    }
}
// deplacer underline
for (let i=0;i<5;i++){
    baliseMenus[i].addEventListener("click", ()=>{
        removeUnderlineMenus(baliseMenus);
        removeActive(baliseMenus);
        baliseMenus[i].classList.add("underline")
        baliseMenus[i].classList.add("active");
    }) 
}
// ripplie on click profile
baliseProfile.addEventListener('click', (e) =>{
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop + window.scrollY;
    const ripplie = document.createElement('span');
    console.log(window.scrollY);

    ripplie.classList.add('span');
    ripplie.style.left = x + 'px';
    ripplie.style.top = y + 'px';
    baliseProfile.appendChild(ripplie);
    setTimeout(() => {
        ripplie.remove();
    }, 1000);
})

// ripplie on click table
tableTr.forEach(tr => {
    tr.addEventListener('click', (e) =>{
        Notification.requestPermission()
            .then(premission => {
                if (premission == 'granted') {
                    new Notification("Bonjour, vous pouvez télécharger mon CV , pour avoir plus d'information.");
                }
            })
    
    })
});

// on scrolln => sticky for header
window.addEventListener("scroll",(e) =>{    
    baliseHeader.classList.toggle("sticky",window.scrollY > 0);
    baliseHeader.classList.toggle("sticky2",window.scrollY > 99);
})

//progress Bar 
let scroll = document.body.scrollHeight - window.innerHeight; 
window.addEventListener("scroll",(e) =>{
    let Y = window.scrollY;
    let H = (Y * 100) / scroll;
    progressBar.style.height = H + 'vh';
});

// scorll slide project view
// default scroll
let x = allCard[0].offsetWidth * allCard.length;
let x_scroll = x / 3;
containerCard.scrollTo({left:x_scroll});
// scroll to left
prevBtn.addEventListener('click', (e) =>{
    if (x_scroll > 0){
        x_scroll = x_scroll - allCard[0].offsetWidth;
    }
    containerCard.scrollTo({left:x_scroll,behavior:'smooth'});
})
// scroll to right
nextBtn.addEventListener('click', (e) =>{
    if (x_scroll < (x-(allCard[0].offsetWidth*3))){
        x_scroll = x_scroll + allCard[0].offsetWidth;
    }
    containerCard.scrollTo({left:x_scroll,behavior:'smooth'}); 
})

// les progressBar Skills
const widthP = new Array(80,70,40,15,30,15,5,30);
const max = document.getElementById("skillsProgres0").offsetWidth;
for (let i = 0;i<skillsProgres.length;i++){
    const progressBarSkill = document.getElementById("progressBarSkill"+i);
    progressBarSkill.style.display = "none";

    const container = document.getElementById("skillsProgres"+i);
    const Element = document.getElementById("skillsImg"+i);
    const pourcentage = document.getElementById("pourcentage"+i);
    container.addEventListener('mouseover',(e) =>{
        Element.style.display = "none";
        container.style.justifyContent = "left";
        progressBarSkill.style.display = "flex";
        progressBarSkill.style.width = ((widthP[i] * max) / 100)  + 'px';

        // animateWidth();
    })
    container.addEventListener('mouseout', (e) =>{
        progressBarSkill.style.display = "none";
        container.style.justifyContent = "center";
        Element.style.display = "flex";
        progressBarSkill.style.width = 0 +'px';
    })
}
