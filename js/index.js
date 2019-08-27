let bannerLis = document.querySelectorAll('.banner>li')
let i = 0;
setInterval(function () {
    if (i > bannerLis.length - 1) {
        i = 0;
    }
    bannerBlack(i)
    i++;
}, 3000)

function bannerBlack(i) {
    bannerLis.forEach(item => {
        item.style.opacity = '0';
    })
    bannerLis[i].style.opacity = '1';
}