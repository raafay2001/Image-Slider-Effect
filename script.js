let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let listItemDom = document.querySelector('.carousel .list');
let thumbnailDom = document.querySelector('.carousel .thumbnail');

nextDom.onclick = function() {
    showSlider('next');
}
prevDom.onclick = function() {
    showSlider('prev');
}

let timeRunning = 3000;
let timeAutonext = 7000;
let timeRunOut;
let runAutorun = setTimeout(() => {
    nextDom.click();
}, timeAutonext);

function showSlider(type){
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');

    if(type === 'next'){
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        carouselDom.classList.add('next');
    }
    else{
        let posationLastitem = itemSlider.length - 1;
        listItemDom.prepend(itemSlider[posationLastitem]);
        thumbnailDom.prepend(itemThumbnail[posationLastitem]);
        carouselDom.classList.add('prev');
    }

    clearTimeout(timeRunOut);
    timeRunOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
        
    }, timeRunning);

    clearTimeout(runAutorun);
    runAutorun = setTimeout(() => {
       nextDom.click();
    }, timeAutonext);

}
