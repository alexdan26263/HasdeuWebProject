let eTel = true;
let tel = document.getElementById('tel');
let fax = document.getElementById('fax');
let telIcon = document.getElementById('tel-icon');
let faxIcon = document.getElementById('fax-icon');

function toggleFax(){
    fax.style.color = "var(--midnightBlue)"
    tel.style.color = "#6e6a8e";
    fax.style.fontWeight = "600";
    tel.style.fontWeight = "500";
    eTel = false;
    faxIcon.style.display = "block";
    telIcon.style.display = "none";
}
function toggleTel(){
    tel.style.color = "var(--midnightBlue)"
    fax.style.color = "#6e6a8e";
    tel.style.fontWeight = "600";
    fax.style.fontWeight = "500";
    eTel = true;
    telIcon.style.display = "block";
    faxIcon.style.display = "none";
}