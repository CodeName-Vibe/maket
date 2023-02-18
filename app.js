// -------------------- Header Scroll Change ----------------------
let headerSections = document.querySelectorAll(".section");
let sections = document.body.children[1].children;
let sectionsTop = [];

for (let i = 0; i < sections.length; i++) {
    sectionsTop[i] = sections[i].getBoundingClientRect().top + pageYOffset;
}

headerMenuSelect();

function headerMenuSelect() {
    let viewPoint = pageYOffset + 400;
    if (viewPoint + 250 < sectionsTop[1]) {
        headerSections[0].classList.add("menu-selected");
        headerSections[1].classList.remove("menu-selected");
        headerSections[2].classList.remove("menu-selected");
        headerSections[3].classList.remove("menu-selected");
        headerSections[4].classList.remove("menu-selected");
        headerSections[5].classList.remove("menu-selected");
        headerSections[6].classList.remove("menu-selected");
    } else if (viewPoint > sectionsTop[1] && viewPoint < sectionsTop[2]) {
        headerSections[0].classList.remove("menu-selected");
        headerSections[1].classList.add("menu-selected");
        headerSections[2].classList.remove("menu-selected");
        headerSections[3].classList.remove("menu-selected");
        headerSections[4].classList.remove("menu-selected");
        headerSections[5].classList.remove("menu-selected");
        headerSections[6].classList.remove("menu-selected");
    } else if (viewPoint > sectionsTop[2] && viewPoint < sectionsTop[3]) {
        headerSections[0].classList.remove("menu-selected");
        headerSections[1].classList.remove("menu-selected");
        headerSections[2].classList.add("menu-selected");
        headerSections[3].classList.remove("menu-selected");
        headerSections[4].classList.remove("menu-selected");
        headerSections[5].classList.remove("menu-selected");
        headerSections[6].classList.remove("menu-selected");
    } else if (viewPoint > sectionsTop[3] && viewPoint < sectionsTop[4]) {
        headerSections[0].classList.remove("menu-selected");
        headerSections[1].classList.remove("menu-selected");
        headerSections[2].classList.remove("menu-selected");
        headerSections[3].classList.add("menu-selected");
        headerSections[4].classList.remove("menu-selected");
        headerSections[5].classList.remove("menu-selected");
        headerSections[6].classList.remove("menu-selected");
    } else if (viewPoint > sectionsTop[4] && viewPoint < sectionsTop[5]) {
        headerSections[0].classList.remove("menu-selected");
        headerSections[1].classList.remove("menu-selected");
        headerSections[2].classList.remove("menu-selected");
        headerSections[3].classList.remove("menu-selected");
        headerSections[4].classList.add("menu-selected");
        headerSections[5].classList.remove("menu-selected");
        headerSections[6].classList.remove("menu-selected");
    } else if (viewPoint > sectionsTop[5] && viewPoint < sectionsTop[6]) {
        headerSections[0].classList.remove("menu-selected");
        headerSections[1].classList.remove("menu-selected");
        headerSections[2].classList.remove("menu-selected");
        headerSections[3].classList.remove("menu-selected");
        headerSections[4].classList.remove("menu-selected");
        headerSections[5].classList.add("menu-selected");
        headerSections[6].classList.remove("menu-selected");
    } else if (viewPoint > sectionsTop[6]) {
        headerSections[0].classList.remove("menu-selected");
        headerSections[1].classList.remove("menu-selected");
        headerSections[2].classList.remove("menu-selected");
        headerSections[3].classList.remove("menu-selected");
        headerSections[4].classList.remove("menu-selected");
        headerSections[5].classList.remove("menu-selected");
        headerSections[6].classList.add("menu-selected");
    }
}

document.addEventListener("scroll",function() {
    headerMenuSelect();
})

// -------------------- Leave Message Button ----------------------
let leaveMessageBtn = document.querySelector(".touch-button-leave");
let touchForm = document.querySelector(".touch-form");

leaveMessageBtn.addEventListener("click",function() {
    leaveMessageBtn.classList.add("hide");
    touchForm.classList.remove("hide");
    touchForm.classList.add("flex-row");
})

// -------------------- Modal Appearance ----------------------
let body = document.body;
let ySiteCenter = (body.getBoundingClientRect().bottom + pageYOffset) / 2;
let closeBtn = document.querySelector(".close");
let modal = document.querySelector(".modal");

closeBtn.addEventListener("click",function() {
    modal.classList.remove("flex");
    modal.classList.add("hide");
    document.removeEventListener("scroll",modalPanel)
})

document.addEventListener("scroll",modalPanel)

function modalPanel() {
    if (pageYOffset > ySiteCenter) {
        modal.classList.add("flex");
        modal.classList.remove("hide");
    }
}
