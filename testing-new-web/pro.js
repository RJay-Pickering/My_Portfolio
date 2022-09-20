window.onresize = resize;

var slider = document.getElementsByClassName('carousel__slider'),
    items = document.getElementsByClassName('carousel__slider__item'),
    prevBtn = document.getElementsByClassName('carousel__prev'),
    nextBtn = document.getElementsByClassName('carousel__next');

var widths, height, totalWidth, margin = 20,
    currIndex = 0,
    interval, intervalTime = 4000;

function init() {
    resize();
    move(Math.floor(items.length / 2));
    timer();
}

function resize() {
    widths = Math.max(window.innerWidth * .25, 275),
    height = window.innerHeight * .5,
    totalWidth = widths * items.length;
    Array.from(slider).forEach(function(slid) {
        slid.style.width = totalWidth + "px";
    });
    // slider.style.width = totalWidth + "px";
    
    for(var i = 0; i < items.length; i++) {
        let item = items[i];
        item.style.width = (widths - (margin * 2)) + "px";
        item.style.height = height + "px";
    }
}

function move(index) {
    if(index < 1) index = items.length;
    if(index > items.length) index = 1;
    currIndex = index;
    
    for(var i = 0; i < items.length; i++) {
        let item = items[i]
            box = item.getElementsByClassName('item__3d-frame')[0];
        if(i == (index - 1)) {
            item.classList.add('carousel__slider__item--active');
            box.style.transform = "perspective(1200px)"; 
        } else {
            item.classList.remove('carousel__slider__item--active');
            box.style.transform = "perspective(1200px) rotateY(" + (i < (index - 1) ? 40 : -40) + "deg)";
        }
    }
    
    Array.from(slider).forEach(function(slid) {
        slid.style.transform = "translate3d(" + ((index * -widths) + (widths / 2) + window.innerWidth / 2) + "px, 0, 0)";
    });
    // slider.style.transform = "translate3d(" + ((index * -widths) + (widths / 2) + window.innerWidth / 2) + "px, 0, 0)";
}

function timer() {
    clearInterval(interval);    
    interval = setInterval(() => {
        move(++currIndex);
    }, intervalTime);    
}

function prev() {
    move(--currIndex);
    timer();
}

function next() {
    move(++currIndex);    
    timer();
}
    
init();
