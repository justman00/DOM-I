const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

const nav = document.querySelectorAll("nav a");
nav.forEach(
  (a, i) => (a.textContent = siteContent["nav"][`nav-item-${i + 1}`])
);
nav.forEach(el => {
  console.log(el);
  el.style.color = "green";
});
const newEl = document.createElement("a");
newEl.href = "#";
newEl.textContent = "Blog";
newEl.style.color = "green";
document.querySelector("nav").appendChild(newEl);

const cta = document.querySelector(".cta-text");
const arr = Array.from(cta.children);
arr.forEach((el, i) => {
  const myObj = siteContent["cta"];
  el.textContent = myObj[Object.keys(myObj)[i]];
});

let bigLogo = document.querySelector("#cta-img");
bigLogo.src = siteContent["cta"]["img-src"];

const textContent = document.querySelectorAll(".top-content .text-content");
// console.log(textContent);
const topContent = [];
textContent.forEach((el, i) => {
  // el.textContent = myObj[Object.keys(myObj)[i]];
  let arr = Array.from(el.children);
  arr.forEach(htmlTag => topContent.push(htmlTag));
});

topContent.forEach((el, i) => {
  const myObj = siteContent["main-content"];
  el.textContent = myObj[Object.keys(myObj)[i]];
});

let middleImg = document.querySelector("#middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"];

const botCont = document.querySelectorAll(".bottom-content .text-content");
// console.log(botCont);
const bottomContent = [];
botCont.forEach((el, i) => {
  // el.textContent = myObj[Object.keys(myObj)[i]];
  let arr = Array.from(el.children);
  arr.forEach(htmlTag => bottomContent.push(htmlTag));
});
bottomContent.forEach((el, i) => {
  const myObj = siteContent["main-content"];
  el.textContent = myObj[Object.keys(myObj)[i + 5]];
});

const cnct = document.querySelector(".contact");
const contact = Array.from(cnct.children);
contact.forEach((el, i) => {
  const myObj = siteContent["contact"];
  el.textContent = myObj[Object.keys(myObj)[i]];
});

const footer = document.querySelector("footer p");
footer.textContent = siteContent.footer.copyright;

const btn = document.querySelector("button");
btn.style.outline = "none";
btn.onclick = changeEverything;

function changeEverything(e) {
  const x = document.querySelector("html").style;

  if (x.color === "black" || x.color == "") {
    x.color = "white";
    x.backgroundColor = "black";
    logo.style.backgroundColor = "white";
  } else {
    x.color = "black";
    x.backgroundColor = "white";
  }
}
