let popped = 0;

document.addEventListener('click',((e)=>{
    // e.target.style.display = 'none';
    if(e.target.className == 'balloon'){
        e.target.style.backgroundColor = 'white';
        e.target.textContent = 'POP';
        popped++;
        checkALL();
    }
}));

function checkALL(){
    if(popped == 10){
        let balloondiv = document.querySelector(".balloon-div");
        balloondiv.innerHTML = "";
        var noballoondiv = document.querySelector("#no-balloons");
        noballoondiv.style.display = "block";
    }
}