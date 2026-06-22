let georgianImg = document.querySelector('.geo-img');
let englishImg = document.querySelector('.eng-img');
let russianImg = document.querySelector('.rus-img');

let georgianLang = document.querySelectorAll('.geo');
let englishLang = document.querySelectorAll('.eng');
let russianLang = document.querySelectorAll('.rus');

function setGeo() {
    englishImg.style.border = 'none';
    russianImg.style.border = "none";
    georgianImg.style.border = "2px solid black";

    englishLang.forEach(el => el.style.display = "none");
    russianLang.forEach(el => el.style.display = "none");
    georgianLang.forEach(el => el.style.display = "inline");
}

function setEng() {
    englishImg.style.border = '2px solid black';
    russianImg.style.border = "none";
    georgianImg.style.border = "none";

    englishLang.forEach(el => el.style.display = "inline");
    russianLang.forEach(el => el.style.display = "none");
    georgianLang.forEach(el => el.style.display = "none");
}

function setRus() {
    englishImg.style.border = 'none';
    russianImg.style.border = "2px solid black";
    georgianImg.style.border = "none";

    englishLang.forEach(el => el.style.display = "none");
    russianLang.forEach(el => el.style.display = "inline");
    georgianLang.forEach(el => el.style.display = "none");
}


let tab1 = document.querySelector('.tab-1');
let tab2 = document.querySelector('.tab-2');

let discountBtn = document.querySelector('.discount');
let newProductsBtn = document.querySelector('.new-products');

function setDiscountTab() {
    newProductsBtn.style.borderBottom = "none";
    tab2.style.display = "none";

    discountBtn.style.borderBottom = "3px solid #66b830";
    tab1.style.display = "grid";
}

function setNewProductsTab() {
    discountBtn.style.borderBottom = "none";
    tab1.style.display = "none";

    newProductsBtn.style.borderBottom = "3px solid #66b830";
    tab2.style.display = "grid";
}


let slides = document.querySelectorAll('.slide');

let index = 0

function changeSlide(newIndex) {
    slides[index].classList.remove("active");
    index = newIndex;
    slides[index].classList.add("active");
}

function nextSlide() {
    let nextIndex = index + 1;
    if (nextIndex >= slides.length) {
        nextIndex = 0;
    }

    console.log('hi');

    changeSlide(nextIndex);
}

function prevSlide() {
    let prevIndex = index - 1;
    if (prevIndex < 0) {
        prevIndex = slides.length - 1;
    }

    changeSlide(prevIndex);
}

setInterval( () => {
    let nextIndex = index + 1;
    if (nextIndex >= slides.length) {
        nextIndex = 0;
    }
    changeSlide(nextIndex);
}, 5000)