let nameAnimate = document.querySelector(".name")
let downArrow = document.querySelector(".down-arrow")
let about = document.querySelector(".about")
let icon = document.querySelectorAll(".icon")
let innerBox = document.querySelectorAll(".inner-box")
let progressPercent = document.querySelectorAll(".percent")
let careerBox = document.querySelector(".career-box2")
let projImgContainer = document.querySelector(".project-img-container")
let projImgDiv = document.querySelectorAll(".proj-img-div")
let projDiv = document.getElementById("project")
let btn = document.querySelector(".btn");
let footerArrow = document.querySelector(".footer-arrow");
let hiddenDiv = document.querySelector(".hidden-div");
let hiddenImg = document.querySelector(".hidden-img");
let arrowLeft = document.querySelector(".arrow-lft")
let arrowRight = document.querySelector(".arrow-rgt")
let hiddenDesc = document.querySelector(".hidden-para")
let visitWebBtn = document.querySelector(".btn-hidden")
let btnHiddenLink = document.querySelector(".btn-hidden-link")
let hiddenCloseBtn = document.querySelector(".close");

// down arrow section
let aboutDivHeight = about.clientHeight;
downArrow.addEventListener('click', ()=>{
    scrollToSmoothly((aboutDivHeight + 100), 400)
})

setInterval(() => {
    downArrow.classList.toggle("down-arrow-animate")
}, 1000);

// footer arrow section
footerArrow.addEventListener('click', ()=>{
    scrollToSmoothly(0, 400)
})

// declaring window height
let windowHeight = window.outerHeight;
// Run this when button in header is clicked - slide
let value = projDiv.getBoundingClientRect();

btn.addEventListener('click', function(e){
  scrollToSmoothly(value.top, 400)
});
function scrollToSmoothly(pos, time) {
    var currentPos = window.pageYOffset;
    var start = null;
    if(time == null) time = 500;
    pos = +pos, 
    time = +time;
    window.requestAnimationFrame(function step(currentTime) {
        start = !start ? currentTime : start;
        var progress = currentTime - start;
        if (currentPos < pos) {
            window.scrollTo(0, ((pos - currentPos) * progress / time) + currentPos);
        } else {
            window.scrollTo(0, currentPos - ((currentPos - pos) * progress / time));
        }
        if (progress < time) {
            window.requestAnimationFrame(step);
        } else {
            window.scrollTo(0, pos);
        }
    });
}


    //When scrolled do this  
window.onscroll = function() {scroll()};

function scroll(){
    let pageyOffset = pageYOffset;
    let iconoffSetValue = windowHeight/2;
    if(document.body.clientWidth < 500){
        iconoffSetValue += 430; 
    }
    if(pageyOffset > iconoffSetValue){
        for(let i = 0; i<icon.length; i++){
            icon[i].classList.add("iconScroll")
        }
    }  if(pageyOffset > iconoffSetValue + 620){
        for(let i = 0; i<innerBox.length; i++){
            innerBox[i].style.width = progressPercent[i].textContent;
            innerBox[i].classList.add("inner-box-progress")
        }
        if(pageyOffset > (iconoffSetValue + 1100)){
            careerBox.classList.add("career-box-animate")
        }
        if(pageyOffset > iconoffSetValue + 1450){
            let arr = ["img1","img2","img3"]
            for(let i=0; i<projImgDiv.length; i++){
                projImgDiv[i].classList.add(arr[i])
            }
        }
    }
    
}

// hidden div contents
let hidden = [[{
    id: 0,
    img: "./images/school-app-images/1.png",
    desc: "This website was built using vanilla JavaScript, CSS, and HTML",
    link: "https://rahulknagori.github.io/sellCourse/"

},
{
    img: "./images/school-app-images/2.png",
    desc: "This website was built using vanilla JavaScript, CSS, and HTML",
    link: "https://rahulknagori.github.io/sellCourse/"
},
{
    img: "./images/school-app-images/4.png",
    desc: "This website was built using vanilla JavaScript, CSS, and HTML",
    link: "https://rahulknagori.github.io/sellCourse/"
},
{
    img: "./images/school-app-images/3.png",
    desc: "This website was built using vanilla JavaScript, CSS, and HTML",
    link: "https://rahulknagori.github.io/sellCourse/"
}],
[{
    id: 1,
    img: "./images/react-app-images/1.png",
    desc: "This website was built using React Js, SCSS, and HTML",
    link: "https://rahulknagori.github.io/my-app/"
},
{
    img: "./images/react-app-images/2.png",
    desc: "This website was built using React Js, SCSS, and HTML",
    link: "https://rahulknagori.github.io/my-app/"
}],
[{
    id: 2,
    img: "./images/real-state-website/Real Estate Website1.png",
    desc: "This website was built using vanilla JavaScript, Bootstrap, CSS, and HTML",
    link:"#home"
},
{
    img: "./images/real-state-website/Real Estate Website2.png",
    desc: "This website was built using vanilla JavaScript, Bootstrap, CSS, and HTML",
    link:"#home"
},
{
    img: "./images/real-state-website/Real Estate Website3.png",
    desc: "This website was built using vanilla JavaScript, Bootstrap, CSS, and HTML",
    link:"#home"
}]
]


// function to get the id of div clicked
    let indexValue = 0

function projectDisplay(){
    projImgDiv.forEach((each)=>{
    each.addEventListener("click", (e)=>{
    for(let i = 0; i < hidden.length; i++){
        if(hidden[i][0].id == e.currentTarget.dataset.id){
            indexValue = e.currentTarget.dataset.id;
            divDisplay()
            hiddenDiv.style.display = "block";
            hiddenImg.src  = hidden[indexValue][0].img
            hiddenDesc.textContent = hidden[indexValue][0].desc
            btnHiddenLink.href = hidden[indexValue][0].link;
            projImgContainer.style.pointerEvents = "none";
            projImgContainer.style.opacity = "0.4";
            break;
        }
    }
    }) 
})
}
projectDisplay()

// do this when the buttons of hidden div pops up 

function divDisplay(){
    let currentItem = 0; 
    arrowRight.addEventListener("click", ()=>{
    currentItem++
    if(currentItem > hidden[indexValue].length-1){
        currentItem = 0;
    }
    slide(currentItem)
})
arrowLeft.addEventListener("click", ()=>{
    currentItem--
    if(currentItem < 0){
        currentItem = hidden[indexValue].length-1;
    }
    slide(currentItem)
})
}

function slide(value){
   hiddenImg.src  = hidden[indexValue][value].img
   hiddenDesc.textContent = hidden[indexValue][value].desc
   btnHiddenLink.href = hidden[indexValue][value].link
}



// close button for hidden div
hiddenCloseBtn.addEventListener("click", ()=>{
    hiddenDiv.style.display = "none";
    projImgContainer.style.pointerEvents = "auto";
    projImgContainer.style.opacity = "1";
})

