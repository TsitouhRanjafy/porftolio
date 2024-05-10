
const baliseNavLinks = document.getElementById("nav_links");
const balisefooter = document.getElementById("footer");
const balisehamburger = document.getElementById("hamburger");
const baliseProfile = document.getElementById("profile");
const baliseImage = document.getElementById("image");
const baliseMenus = document.querySelectorAll("div.navbar_menu a");
const baliseHeader = document.querySelector("header");
const baliseBody = document.querySelector("body");
console.log(baliseHeader);
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
// deplacer underline
for (let i=0;i<5;i++){
    baliseMenus[i].addEventListener("click", ()=>{
        removeUnderlineMenus(baliseMenus);
        baliseMenus[i].classList.add("underline")
    }) 
}
// petit anime baliseProfile
a =54; b=39; c=18; d=76; e=50; f=63; g=30; h=48; bttm = -30;
toureA = true; toureB = true; toureC = true; toureD = true; toureE = true; toureF = true; toureG = true; toureH = true; toureBttm = true;
let interval = setInterval(() =>{
    baliseProfile.style.borderRadius = a+"% "+b+"% "+c+"% "+d+"% / "+e+"% "+f+"% "+g+"% "+h+"%"; // 54% 39% 18% 76% / 50% 63% 30% 48%
    let x = 46;
    if (toureA){ a++; if (a == 54+x){ toureA = false;}}else{if (a == 46){toureA = true;}a--; }
    if (toureB){ b++; if (b == 39+x){ toureB = false;}}else{if (b == 39){toureB = true;}b--; }
    if (toureC){ c++; if (c == 18+x){ toureC = false;}}else{if (c == 18){toureC = true;}c--; }
    if (toureD){ d++; if (d == 76+x){ toureD = false;}}else{if (d == 76){toureD = true;}d--; }
    if (toureE){ e++; if (e == 50+x){ toureE = false;}}else{if (e == 42){toureE = true;}e--; }
    if (toureF){ f++; if (f == 63+x){ toureF = false;}}else{if (f == 63){toureF = true;}f--; }
    if (toureG){ g++; if (g == 30+x){ toureG = false;}}else{if (g == 30){toureG = true;}g--; }
    if (toureH){ h++; if (h == 48+x){ toureH = false;}}else{if (h == 48){toureH = true;}h--; }

    baliseImage.style.bottom = bttm + 'px';
    if (toureBttm){
        bttm = bttm + 1;
        if (bttm == -10){
            toureBttm = false;
        }
    }else{
        bttm = bttm - 1;
        if (bttm == -30){
            toureBttm = true;
        }
    }

},100);

/*bttm = -30; left = 0;
toureBttm = true; toureLeft = true;
let interval2 = setInterval(() => {
    baliseImage.style.left = left + 'px';
    baliseImage.style.bottom = bttm + 'px';
    if (toureBttm){
        bttm = bttm + 0.1;
        // left++; 
        if (left == 5){
            toureLeft = false
        }
        if (bttm == -25){
            toureBttm = false;
        }
    }else{
        bttm = bttm - 0.1;
        // left--;
        if (left == 0){
            toureLeft = true;
        }
        if (bttm == -30){
            toureBttm = true;
        }
    }
    console.log(' bttm :'+bttm);
}, 10);*/

// ripplie on click
baliseProfile.addEventListener('click', (e) =>{
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;
    console.log("x :"+x+" y:"+y);

    const ripplie = document.createElement('span');
    ripplie.classList.add('span');
    ripplie.style.left = x + 'px';
    ripplie.style.top = y + 'px';
    baliseProfile.appendChild(ripplie);

    setTimeout(() => {
        ripplie.remove();
    }, 1000);
})

// on scrolln => sticky for header
window.addEventListener("scroll",(e) =>{    
    baliseHeader.classList.toggle("sticky",window.scrollY > 0);
    baliseHeader.classList.toggle("sticky2",window.scrollY > 99);
    console.log("X :"+window.scrollY);
})

