const headingText2 = document.getElementsByTagName("h2");
const backpackSection = document.getElementById("backpack");

// checklist 2 - change text color of heading 2's
for (const h2 of headingText2) {
    h2.style.color = "lightblue";
}

// checklist 3 - change background color of backpack section
backpackSection.style.backgroundColor = "tomato";

// checklist 4 - set card class item border radius to 30px
const cards = document.getElementsByClassName("card");

for (const card of cards) {
    card.style.borderRadius = "30px";
}

// checklist 5 - set onclick event on button and make a function then console any text
function checkList5() {
    // console.log('Supply 350 card has been clicked');
}

// checklist 6 - remove card item individually by addEventListener
const pandaBtns = document.getElementsByClassName("panda-btn-buy-now");

for (pandaBtn of pandaBtns) {
    pandaBtn.addEventListener("click", function (event) {
        event.target.parentNode.parentNode.parentNode.removeChild(
            event.target.parentNode.parentNode
        );
    });
}

// checklist 7 - set disabled attribute in footer btn, if input field value is email then only remove disabled attribute
const footerInputField = document.getElementById("footer-input-field");
const footerSubmitBtn = document.getElementById("footer-submit-btn");

footerInputField.addEventListener("keyup", function () {
    if (footerInputField.value === "email") {
        footerSubmitBtn.removeAttribute("disabled");
    } else {
        footerSubmitBtn.setAttribute("disabled", true);
    }
});

// checklist 8 - change image on mouseover
const images = document.getElementsByTagName("img");
const imagePaths = [
    "images/bags/bag-1.png",
    "images/bags/bag-2.png",
    "images/bags/bag-3.png",
    "images/banner-images/headphone.png",
    "images/banner-images/tv.png",
    "images/banner-images/xbox.png",
    "images/categories/bag.png",
    "images/categories/shoes.png",
    "images/categories/watch.png",
    "images/shoes/shoe-1.png",
    "images/shoes/shoe-2.png",
    "images/shoes/shoe-3.png",
];

for (const image of images) {
    image.addEventListener("mouseover", function () {
        image.src = imagePaths[Math.floor(Math.random() * 12)];
    });
}

// checklist 9 -
const letsStayInTouchContainer = document.querySelector(
    ".lets-stay-in-touch-container"
);

letsStayInTouchContainer.addEventListener("dblclick", function () {
    letsStayInTouchContainer.style.backgroundColor = "green";
});
