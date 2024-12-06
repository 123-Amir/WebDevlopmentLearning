function countSelected(selectObject){
    let numberselected = 0;
for(let i=0;i<selectObject.options.length;i++){
    if(selectObject.options[i].selected){
        numberSelected++;
    }
}
  return numberSelected;
}

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    const musictypes = document.selectForm.musictypes;
    console.log(`you have selected ${countSelected(musictypes)} option(s).`);

});