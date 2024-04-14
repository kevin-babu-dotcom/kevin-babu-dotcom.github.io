const allItems = document.querySelectorAll('.navmenu ul li a');
allItems.forEach(items =>{
    items.addEventListener('click',function(e){
        for(var i=0;i<allItems.length;i++){
            allItems[i].classList.remove("active");
        }
        this.classList.add("active")
    })
})

const sections = document.querySelectorAll('section'); // Get all sections
const allitems = document.querySelectorAll('.navmenu ul li a');


window.addEventListener('scroll', () => {
    let currentSection = null;

    for (const section of sections) {
        const sectionTop = section.getBoundingClientRect().top ;  
        const sectionBottom = sectionTop + section.offsetHeight;


    if (sectionTop<475 && sectionTop>= 0) {
        currentSection=section;
            break;
    }
    if(currentSection==null){
        if((sectionBottom+sectionTop)<951 && (sectionBottom+sectionTop)>0){
            currentSection=section;
                break;
        }
    }
    
}

    if (currentSection) {
        const sectionId = currentSection.id;

    allitems.forEach(items => {
        if (items.hash === `#${sectionId}`) {
        items.classList.add('active');
        } else {
        items.classList.remove('active');
        }
    });
    } 
});
const cards = document.querySelectorAll(".card")
const card2 = document.querySelector(".card2")
const card2p =document.querySelector(".class2p")
console.log(card2p)
cards.forEach(card =>{
    card.addEventListener('mouseover',()=>{
        card2.style.width = "4rem"
        card.style.width = "45%"
        card2p.style.opacity="0"
    })
    card.addEventListener("mouseout",()=>{
        card2.style.width="33rem"
        card.style.width ="4rem"
        card2p.style.opacity="100"
    })
})




const redirectDiv1 = document.getElementById("github");
redirectDiv1.addEventListener("click", function() {
  window.open("https://github.com/kevin-babu-dotcom",'_blank');
});
const redirectDiv2 = document.getElementById("linkedin");
redirectDiv2.addEventListener("click", function() {
  window.open("https://www.linkedin.com/in/kevin-babu-960742172/",'_blank');
});
const redirectDiv3 = document.getElementById("insta");
redirectDiv3.addEventListener("click", function() {
  window.open("https://www.instagram.com/kevin_babu.in/",'_blank');
});
const redirectDiv4 = document.getElementById("x");
redirectDiv4.addEventListener("click", function() {
  window.open("https://twitter.com/kevin_babu_dot",'_blank');
});
const redirectDiv5 = document.getElementById("x");
redirectDiv5.addEventListener("click", function() {
  window.open("https://open.spotify.com/user/s3kadqk0xhoc4y8dhtq058yq2",'_blank');
});













