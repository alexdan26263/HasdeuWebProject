let bar1 = document.getElementById('bar1');
let bar2 = document.getElementById('bar2');
let bar3 = document.getElementById('bar3');

let sideNavOpen = false;
let scrolling = false;
let sideDropdownOpen = false;

// window.onscroll = () => scrolling = true;

// setInterval(() => {
//     if ( scrolling ) {
//         scrolling = false;
//         closeNav();
//     }
// }, 250);


// window.addEventListener("scroll", (event) => {
//     let scroll = this.scrollY;
//     if (scroll > 50){
//         document.getElementById("sideNav").style.top = "100px";
//     }
//     else if (scroll <= 50){
//         let a = 140 - scroll;
//         document.getElementById("sideNav").style.top = a + "px";
//     }
// });
function closeNav() {
    document.getElementById("sideNav").style.width = "0";
    bar1.style.marginBottom = '10px';
    bar1.style.top = '0px';
    bar1.style.marginTop = '0px';
    bar1.style.transform = 'rotate(-180deg)';
    bar2.style.transform = 'rotate(180deg)';
    bar3.style.opacity = '100%';
    sideNavOpen = false;
}
function openNav() {
    document.getElementById("sideNav").style.width = "250px";
    bar1.style.marginTop = '20px';
    bar1.style.marginBottom = '0px';
    bar1.style.top = "4px";
    bar1.style.transform = 'rotate(-45deg)';
    bar2.style.transform = 'rotate(45deg)';
    bar3.style.opacity = '0%';
    sideNavOpen = true;
}
function sideDropdownToggle(){
    let dropdown = document.getElementById("dropdown-side");
    let arrow = document.getElementById("arrow");
    let toggleButton = document.getElementById("toggleBttn");
    if (sideDropdownOpen == false){
        dropdown.style.height = "250px";
        sideDropdownOpen = true;
        arrow.classList.toggle("up");
        toggleButton.classList.toggle("border-bottom");
    } else if (sideDropdownOpen == true){
        dropdown.style.height = "0px";
        sideDropdownOpen = false;
        arrow.classList.toggle("up");
        toggleButton.classList.toggle("border-bottom");
    }
}
function check(){
    if (sideNavOpen == true)
    {
        closeNav();
    } else if (sideNavOpen == false)
    {
        openNav();
    }
}
$('.sidenav').on('DOMMouseScroll mousewheel', function(ev) {
    let $this = $(this),
        scrollTop = this.scrollTop,
        scrollHeight = this.scrollHeight,
        height = $this.height(),
        delta = (ev.type == 'DOMMouseScroll' ?
            ev.originalEvent.detail * -40 :
            ev.originalEvent.wheelDelta),
        up = delta > 0;

    let prevent = function() {
        ev.stopPropagation();
        ev.preventDefault();
        ev.returnValue = false;
        return false;
    }

    if (!up && -delta > scrollHeight - height - scrollTop) {
        $this.scrollTop(scrollHeight);
        return prevent();
    } else if (up && delta > scrollTop) {
        $this.scrollTop(0);
        return prevent();
    }
});