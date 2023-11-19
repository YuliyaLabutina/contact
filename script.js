const dots = document.querySelectorAll('.slider_dot');

const slider_wrapper = document.querySelector('.slider_wrapper')
const wrapperWidth = parseFloat(getComputedStyle(slider_wrapper).width);
const newWidth = wrapperWidth /dots.length;
function dotsWidth() {
    dots.forEach((dot) => {
        dot.style.width = newWidth + 'px';
    }
    )
}
dotsWidth()
//   переключение галлерея
const carusel = document.querySelector('.gallery_img');

const buttons = document.querySelectorAll('.gallery_buttons_switch button');
const images = carusel.querySelectorAll('img');
const firstImg = carusel.querySelectorAll('img')[0];
let firstImgWidth = firstImg.clientWidth + 50;
const firstActiveDot = document.querySelector('.active_dot');
let firstActiveDotWidth = firstActiveDot.clientWidth

function activeDot(index) {
dots.forEach(item => item.classList.remove('active_dot'));
     dots[index].classList.add('active_dot');
}

const buttonLeft = document.querySelector('.gallery_buttons_switch .left')
const buttonRight = document.querySelector('.gallery_buttons_switch .right')
let sliderCount = 0;
function nextSlider() {
    if(sliderCount<dots.length-1){  
        sliderCount++;
    if (sliderCount >= images.length )
        sliderCount = 0;
    }
    carusel.scrollLeft += firstImgWidth
    activeDot(sliderCount)
}
function prevSlider(){
    if (sliderCount>0){
    sliderCount--;
        if (sliderCount < 0) sliderCount = images.length - 1;
    }
    carusel.scrollLeft -= firstImgWidth
    activeDot(sliderCount)
}
// buttonLeft.addEventListener('click',prevSlider)
// buttonRight.addEventListener('click',nextSlider)

// переключение команда
const buttonLeftTeam = document.querySelector('.top_section .left')
const buttonRightTeam = document.querySelector('.top_section .right')
const profilesTeam = document.querySelectorAll('.our_team_gallery li')
const caruselTeam = document.querySelector('.team_images');
const firstProdile = caruselTeam.querySelectorAll('li')[0];
let firstProfileWidth = firstProdile.clientWidth + 50;
let countProfil=0;
function nextSliderTeam() {
        countProfil++;
        if (countProfil < profilesTeam.length - 1)
            countProfil = 0;

    caruselTeam.scrollLeft += firstProfileWidth
}
function prevSliderTeam() {
    countProfil--;
    if (countProfil < 0)
        countProfil = profilesTeam.length - 1 ;

    caruselTeam.scrollLeft -= firstProfileWidth
}
buttonRightTeam.addEventListener('click',nextSliderTeam)
buttonLeftTeam.addEventListener('click', prevSliderTeam)


function telephone() {
    navigator.clipboard.writeText('8-900-000-00-00,8-900-000-00-00')
}
function imail() {
    navigator.clipboard.writeText('metall-market@mail.ru')
}

function legal() {
    navigator.clipboard.writeText('123456, Россия, Москва, ул. Ленина, 145а, 801')
}
