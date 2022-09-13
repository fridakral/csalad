
var fullImageBox = document.querySelector('.full_image');
var fullImage = document.querySelector('.full_image img');

function closeFullImg(){
    fullImageBox.style.display="none";
}


function openFullImg(src){
    fullImageBox.style.display="flex";
    fullImage.src=src;
}
