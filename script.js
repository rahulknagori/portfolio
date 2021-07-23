let nameAnimate = document.querySelector(".name");
let heroDiv = document.getElementById("hero-div");
let introPara = document.querySelectorAll(".into-para");
let downArrow = document.querySelector(".down-arrow");
let about = document.querySelector(".about");
let icon = document.querySelectorAll(".icon");
let innerBox = document.querySelectorAll(".inner-box");
let progressPercent = document.querySelectorAll(".percent");
let careerBox = document.querySelector(".career-box2");
let projImgContainer = document.querySelector(".project-img-container");
let projImgDiv = document.querySelectorAll(".proj-img-div");
let projDiv = document.getElementById("project");
let btn = document.querySelector(".btn");
let footerArrow = document.querySelector(".footer-arrow");
let hiddenDiv = document.querySelector(".hidden-div");
let hiddenImg = document.querySelector(".hidden-img");
let arrowLeft = document.querySelector(".arrow-lft");
let arrowRight = document.querySelector(".arrow-rgt");
let hiddenDesc = document.querySelector(".hidden-para");
let visitWebBtn = document.querySelector(".btn-hidden");
let btnHiddenLink = document.querySelector(".btn-hidden-link");
let hiddenCloseBtn = document.querySelector(".close");
let filterJavascript = document.querySelectorAll(".javascript");
let filterReact = document.querySelectorAll(".react");
let viewAll = document.querySelector(".view-all");

let overlay = document.querySelector(".overlay");

// setTimeout for intro section
async function setIntr() {
  return setTimeout(() => {
    introPara[0].classList.add("setTim");
    return 1;
  }, 2000);
}
setIntr()
  .then((res) => {
    return setTimeout(() => {
      introPara[res].classList.add("setTim");
      return 2;
    }, 5000);
  })
  .then((val) => {
    return setTimeout(() => {
      introPara[2].classList.add("setTim");
      return 2;
    }, 10000);
  });

// down arrow section
let aboutDivHeight = about.getBoundingClientRect();
downArrow.addEventListener("click", () => {
  scrollToSmoothly(aboutDivHeight.top, 400);
});

setInterval(() => {
  downArrow.classList.toggle("down-arrow-animate");
}, 1000);

// footer arrow section
footerArrow.addEventListener("click", () => {
  scrollToSmoothly(0, 400);
});

// declaring window height
let windowHeight = window.outerHeight;
// Run this when button in header is clicked - slide
let value = projDiv.getBoundingClientRect();

btn.addEventListener("click", function (e) {
  scrollToSmoothly(value.top, 400);
});

function scrollToSmoothly(pos, time) {
  var currentPos = window.pageYOffset;
  var start = null;
  if (time == null) time = 500;
  (pos = +pos), (time = +time);
  window.requestAnimationFrame(function step(currentTime) {
    start = !start ? currentTime : start;
    var progress = currentTime - start;
    if (currentPos < pos) {
      window.scrollTo(0, ((pos - currentPos) * progress) / time + currentPos);
    } else {
      window.scrollTo(0, currentPos - ((currentPos - pos) * progress) / time);
    }
    if (progress < time) {
      window.requestAnimationFrame(step);
    } else {
      window.scrollTo(0, pos);
    }
  });
}

//When scrolled do this
window.onscroll = function () {
  scroll();
};

function scroll() {
  let pageyOffset = pageYOffset;
  let iconoffSetValue = windowHeight / 2;
  if (document.body.clientWidth < 500) {
    iconoffSetValue += 430;
  }
  if (pageyOffset > iconoffSetValue) {
    for (let i = 0; i < icon.length; i++) {
      icon[i].classList.add("iconScroll");
    }
  }
  if (pageyOffset > iconoffSetValue + 620) {
    for (let i = 0; i < innerBox.length; i++) {
      innerBox[i].style.width = progressPercent[i].textContent;
      innerBox[i].classList.add("inner-box-progress");
    }
    if (pageyOffset > iconoffSetValue + 1100) {
      careerBox.classList.add("career-box-animate");
    }
    if (pageyOffset > iconoffSetValue + 1450) {
      let arr = ["img1", "img2", "img3", "img1", "img2", "img3"];
      for (let i = 0; i < projImgDiv.length; i++) {
        projImgDiv[i].classList.add(arr[i]);
      }
    }
  }
}

// hidden div contents
let hidden = [
  [
    {
      id: 0,
      img: "./images/school-app-images/1.png",
      desc: "This website was built using vanilla JavaScript, CSS, and HTML. This is not a mobile responsive website. This is responsive to tablet resolution",
      link: "https://rahulknagori.github.io/sellCourse/",
    },
    {
      img: "./images/school-app-images/2.png",
      desc: "This website was built using vanilla JavaScript, CSS, and HTML. This is not a mobile responsive website. This is responsive to tablet resolution",
      link: "https://rahulknagori.github.io/sellCourse/",
    },
    {
      img: "./images/school-app-images/4.png",
      desc: "This website was built using vanilla JavaScript, CSS, and HTML. This is not a mobile responsive website. This is responsive to tablet resolution",
      link: "https://rahulknagori.github.io/sellCourse/",
    },
    {
      img: "./images/school-app-images/3.png",
      desc: "This website was built using vanilla JavaScript, CSS, and HTML. This is not a mobile responsive website. This is responsive to tablet resolution",
      link: "https://rahulknagori.github.io/sellCourse/",
    },
  ],
  [
    {
      id: 1,
      img: "./images/react-app-images/1.png",
      desc: "This website was built using React Js, SCSS, and HTML. This is not a mobile responsive website. This is responsive to tablet resolution",
      link: "https://rahulknagori.github.io/my-app/",
    },
    {
      img: "./images/react-app-images/2.png",
      desc: "This website was built using React Js, SCSS, and HTML. This is not a mobile responsive website. This is responsive to tablet resolution",
      link: "https://rahulknagori.github.io/my-app/",
    },
  ],
  [
    {
      id: 2,
      img: "./images/real-state-website/Real Estate Website1.png",
      desc: "This website was built using vanilla JavaScript, Bootstrap, CSS, and HTML. This is a dynamic mobile responsive website",
      link: "https://rahulknagori.github.io/RealEstate/index.html",
    },
    {
      img: "./images/real-state-website/Real Estate Website2.png",
      desc: "This website was built using vanilla JavaScript, Bootstrap, CSS, and HTML. This is a dynamic mobile responsive website",
      link: "https://rahulknagori.github.io/RealEstate/index.html",
    },
    {
      img: "./images/real-state-website/Real Estate Website3.png",
      desc: "This website was built using vanilla JavaScript, Bootstrap, CSS, and HTML. This is a dynamic mobile responsive website",
      link: "https://rahulknagori.github.io/RealEstate/index.html",
    },
  ],
  [
    {
      id: 3,
      img: "./images/react-food-order-app/1.png",
      desc: "This website was built using React Js, CSS, and HTML. This is a responsive website. Various advanced concepts like useReducer, and useContext were used.",
      link: "https://rahulknagori.github.io/react-food-order-app/",
    },
    {
      img: "./images/react-food-order-app/2.png",
      desc: "This website was built using React Js, CSS, and HTML. This is a responsive website. Various advanced concepts like useReducer, and useContext were used.",
      link: "https://rahulknagori.github.io/react-food-order-app/",
    },
  ],
  [
    {
      id: 4,
      img: "./images/react-todo/1.png",
      desc: "This website was built using React Js, CSS, and HTML.",
      link: "https://rahulknagori.github.io/react-todo/",
    },
    {
      img: "./images/react-todo/2.png",
      desc: "This website was built using React Js, CSS, and HTML.",
      link: "https://rahulknagori.github.io/react-todo/",
    },
  ],
  [
    {
      id: 5,
      img: "./images/cafe-project/1.png",
      desc: "This website was built using vanilla JavaScript, Bootstrap, CSS, and HTML. This is a dynamic mobile responsive website",
      link: "#",
    },
    {
      img: "./images/cafe-project/2.png",
      desc: "This website was built using vanilla JavaScript, Bootstrap, CSS, and HTML. This is a dynamic mobile responsive website",
      link: "#",
    },
  ],
];

// function to get the id of div clicked
let indexValue = 0;

function projectDisplay() {
  projImgDiv.forEach((each) => {
    each.addEventListener("click", (e) => {
      for (let i = 0; i < hidden.length; i++) {
        if (hidden[i][0].id == e.currentTarget.dataset.id) {
          indexValue = e.currentTarget.dataset.id;
          divDisplay();
          if (document.body.clientWidth < 500) {
            openFullscreen();
          }
          overlay.style.display = "block";
          hiddenDiv.style.display = "block";
          hiddenDiv.style.zIndex = "1";
          hiddenImg.src = hidden[indexValue][0].img;
          hiddenDesc.textContent = hidden[indexValue][0].desc;
          btnHiddenLink.href = hidden[indexValue][0].link;
          heroDiv.style.pointerEvents = "none";
          heroDiv.style.opacity = "0.4";
          heroDiv.style.zIndex = "-100";
          break;
        }
      }
    });
  });
}
projectDisplay();

// do this when the buttons of hidden div pops up

function divDisplay() {
  let currentItem = 0;
  arrowRight.addEventListener("click", () => {
    currentItem++;
    if (currentItem > hidden[indexValue].length - 1) {
      currentItem = 0;
    }
    slide(currentItem);
  });
  arrowLeft.addEventListener("click", () => {
    currentItem--;
    if (currentItem < 0) {
      currentItem = hidden[indexValue].length - 1;
    }
    slide(currentItem);
  });
}

function slide(value) {
  hiddenImg.src = hidden[indexValue][value].img;
  hiddenDesc.textContent = hidden[indexValue][value].desc;
  btnHiddenLink.href = hidden[indexValue][value].link;
}

// do this for mobile screen when hidden div pops up
function openFullscreen() {
  if (hiddenDiv.requestFullscreen) {
    hiddenDiv.requestFullscreen();
  } else if (hiddenDiv.webkitRequestFullscreen) {
    /* Safari */
    hiddenDiv.webkitRequestFullscreen();
  } else if (hiddenDiv.msRequestFullscreen) {
    /* IE11 */
    hiddenDiv.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    /* IE11 */
    document.msExitFullscreen();
  }
}

//overlay reset
function overlayReset() {
  overlay.style.display = "none";
  heroDiv.style.pointerEvents = "auto";
  heroDiv.style.opacity = "1";
}
// close button for hidden div
hiddenCloseBtn.addEventListener("click", () => {
  if (document.body.clientWidth < 500) {
    closeFullscreen();
  }
  overlayReset();
});

//filter for JavaScript and React

function filterCode(firstArg, secondArg) {
  viewAll.style.display = "block";
  for (let each of firstArg) {
    each.classList.remove("hidden");
  }
  for (let each of secondArg) {
    each.classList.add("hidden");
  }
}

const filter = (e) => {
  if (e.currentTarget.textContent == "JavaScript") {
    filterCode(filterJavascript, filterReact);
  }
  if (e.currentTarget.textContent == "React") {
    filterCode(filterReact, filterJavascript);
  } else if (e.currentTarget.textContent == "View All") {
    filterCode(filterReact, filterJavascript);
    for (let each of filterReact) {
      each.classList.remove("hidden");
    }
    for (let each of filterJavascript) {
      each.classList.remove("hidden");
    }
    viewAll.style.display = "none";
  }
};
