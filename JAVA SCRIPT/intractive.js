function submitForm(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const responseContainer = document.getElementById("response");

    if(name.trim() !== "" && email.trim() !== ""){
        responseContainer.innerHTML = `<p>Thank you ${name}! your message has been
        submitted.</p>`;
        clearForm();
    }else{
        responseContainer.innerHTML = `<p>Please fill out all fields.</p>`
    }
}
function clearForm(){
    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("message").value="";
}