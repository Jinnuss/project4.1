const header = document.getElementById("header");

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");

const intro = document.getElementById("intro");
const about = document.getElementById("about");
const gallery = document.getElementById("gallery");
const mp4 = document.getElementById("mp4");
const video = document.getElementById("video");
const contact = document.getElementById("contact");

btn1.onclick = () => {
    for (item of header.classList) {
        header.classList.remove(item);
    }
    header.classList.add("bg1");
    for (item of intro.classList) {
        if (item == "none") {
            intro.classList.remove("none");
        }
    }
    intro.classList.add("active");
    about.classList.add("none");
    gallery.classList.add("none");
    video.classList.add("none");
    contact.classList.add("none");

}
btn2.onclick = () => {
    for (item of header.classList) {
        header.classList.remove(item);
    }
    header.classList.add("bg2");
    for (item of about.classList) {
        if (item == "none") {
            about.classList.remove("none");
        }
    }
    about.classList.add("active");
    intro.classList.add("none");
    gallery.classList.add("none");
    video.classList.add("none");
    contact.classList.add("none");

}
btn3.onclick = () => {
    for (item of header.classList) {
        header.classList.remove(item);
    }
    header.classList.add("bg3");
    for (item of gallery.classList) {
        if (item == "none") {
            gallery.classList.remove("none");
        }
    }
    gallery.classList.add("active");
    intro.classList.add("none");
    about.classList.add("none");
    video.classList.add("none");
    contact.classList.add("none");

}
btn4.onclick = () => {
    for (item of header.classList) {
        if(item=="bg1" || item=="bg12" || item=="bg3"){
            header.classList.remove(item);
        }
    }
    for (item of video.classList) {
        if (item == "none") {
            video.classList.remove("none");
        }
    }
    gallery.classList.add("none");
    intro.classList.add("none");
    about.classList.add("none");
    contact.classList.add("none");

}
btn5.onclick = () => {
    for (item of header.classList) {
        header.classList.remove(item);
    }
    header.classList.add("bg5");
    for (item of contact.classList) {
        if (item == "none") {
           contact.classList.remove("none");
        }
    }
    contact.classList.add("active");
    gallery.classList.add("none");
    intro.classList.add("none");
    about.classList.add("none");
    video.classList.add("none");

}