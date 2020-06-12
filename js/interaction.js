const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelector(".nav-links li");


menu.addEventListener('click', () => {
    navLinks.classList.toggle("open");
});




function upDate() {
    document.getElementById('anna').style.display = "none";
    document.getElementById('hilton').style.display = "flex";
    document.getElementById('vladimir').style.display = "none";

}

function unDo() {
    document.getElementById('vladimir').style.display = "none";
    document.getElementById('hilton').style.display = "none";
    document.getElementById('anna').style.display = "flex";
}

function upDate1() {
    document.getElementById('vladimir').style.display = "none";
    document.getElementById('hilton').style.display = "none";
    document.getElementById('anna').style.display = "none";
    document.getElementById('irandhir').style.display = "flex";

}

function unDo1() {
    document.getElementById('vladimir').style.display = "none";
    document.getElementById('hilton').style.display = "none";
    document.getElementById('irandhir').style.display = "none";
    document.getElementById('anna').style.display = "flex";
}

function upDate2() {
    document.getElementById('hilton').style.display = "none";
    document.getElementById('anna').style.display = "none";
    document.getElementById('irandhir').style.display = "none";
    document.getElementById('vladimir').style.display = "flex";

}

function unDo2() {
    document.getElementById('hilton').style.display = "none";
    document.getElementById('irandhir').style.display = "none";
    document.getElementById('vladimir').style.display = "none";
    document.getElementById('anna').style.display = "flex";
}

$('#example').popover(options)