const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change", setWheather);

function setWheather(){
    const choice = select.value;
    if(choice=="Sunny"){
        para.textContent = "It is a nice and sunny today.";
    }else if(choice=="ranny"){
        para.textContent = "Rain is falling outside. ";
    }else if(choice == "overcast"){
        para.textContent = "It is not Raining "
    }else{
        para.textContent = "";
    }
}