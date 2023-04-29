const menuBtn=document.querySelector(".menu")
const menu=document.querySelector("ul")
console.log(menuBtn)
console.log(menu)
menuBtn.addEventListener("click",()=>{
    if(menu.style.display=="none"){
        console.log("yes")
        menu.style.display="block";
        menuBtn.style.backgroundImage="url(images/icon-close.svg)";
        setTimeout(()=>{
            menu.style.opacity=1;
        },300)
    }else{
        setTimeout(()=>{
            menu.style.display="none"
        },510)
        menu.style.opacity=0;
        menuBtn.style.backgroundImage="url(images/icon-hamburger.svg)";

    }
})