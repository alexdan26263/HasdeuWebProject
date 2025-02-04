// const buttons = document.querySelectorAll('.link');
// let arrow = document.querySelectorAll('.arrow-pag');
// let dropMenu = document.querySelectorAll('.link-dropdown');

// Array.from(buttons).forEach((el, index) => {
//     let toggled = false;
//     el.addEventListener('click', function(event) {
//         if (toggled){
//             el.style.backgroundColor = "white";
//             el.style.color = "var(--midnightBlue)";
//             arrow[index].style.borderColor = "var(--midnightBlue)";
//             arrow[index].classList.toggle('up-pag');
//             dropMenu[index].style.height = "0px";
//             toggled = false;
//         } else{
//             console.log(index);
//             el.style.backgroundColor = "var(--midnightBlue)";
//             el.style.color = "white";
//             arrow[index].style.borderColor = "white";
//             arrow[index].classList.toggle('up-pag');
//             dropMenu[index].style.height = "fit-content";
//             toggled = true;
//         }        
//     });
// });