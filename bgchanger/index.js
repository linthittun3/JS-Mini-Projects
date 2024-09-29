let buttons = document.querySelectorAll('.btn');
let body = document.querySelector('body');

buttons.forEach((button)=>{
    button.addEventListener('click', ((e)=>{
        switch(e.target.id){
            case "primary":
                body.style.backgroundColor = "#0d6efd";
                break;
            case "success":
                body.style.backgroundColor = "#198754";
                break;
            case "info":
                body.style.backgroundColor = "#0dcaf0";
                break;
            case "warning":
                body.style.backgroundColor = "#ffc107";
                break;
            case "danger":
                body.style.backgroundColor = "#dc3545";
                break;
        }
    }));
});