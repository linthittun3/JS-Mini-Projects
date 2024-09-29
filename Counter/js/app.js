
let count = 0
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el")
let errorEl = document.getElementById("error-el")

function increment(){
    count += 1
    countEl.textContent = count;
    console.log(count)
    errorEl.innerHTML = " "
}

function save(){
    if(count == 0){
        errorEl.innerHTML = "You cannot save 0!"
    }else{
        let entryStr = count + " - "
        saveEl.innerHTML += entryStr
        count = 0
        countEl.textContent = 0;
    }
    

}

