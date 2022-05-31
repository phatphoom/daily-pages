// side 1 
let test = document.querySelector("#nav-side1");
// text of side1 in hidden
let open = document.querySelector(".paragraph");
test.addEventListener("click",show);

function show(){
    open.style.display = "block"
}