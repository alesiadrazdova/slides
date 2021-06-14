let sliders = document.getElementsByClassName('slide')

console.log(sliders);

const arrSliders = Array.from(sliders);
console.log(arrSliders);

arrSliders.forEach(item => {
    item.addEventListener('click', addClass)
})

function addClass (e) {
    let item = e.target;
    clearActive()
    item.classList.add('active');
}

function clearActive() {
    arrSliders.forEach(item => {
        item.classList.remove('active');
    })
}
