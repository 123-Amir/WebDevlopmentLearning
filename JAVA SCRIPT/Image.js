function openModal(imgSrc, imgAlt)
{
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("modalImg");
    const captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = imgSrc;
    captionText.textContent = imgAlt;
}
function closeModal(){
    const modal = document.getElementById("myModal");
    modal.style.display = none;
}

window.onclick = function(event) {
    const modal  = document.getElementById("myModal");
    if(event.target===modal){
        closeModal();
    }
};