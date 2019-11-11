document.addEventListener("DOMContentLoaded", function () {
    let imgs = document.querySelectorAll('img');
    let hideBtn = document.querySelector('#hideButton');
    let showBtn = document.querySelector('#showButton');
    let tagInput = document.querySelector('#tagInput');
    let clearBtn = document.querySelector('#clearButton');
    showBtn.addEventListener('click', function () {
        let inputValue = tagInput.value;
        imgs.forEach(function(img) {
            if (img.dataset.tag.split(',').indexOf(inputValue) !== -1){
                img.classList.remove('invisible');
            }else{
                img.classList.add('invisible');
            }
        });
        tagInput.value = '';
    });
    hideBtn.addEventListener('click', function () {
        let inputValue = tagInput.value;
        imgs.forEach(function(img) {
            if (img.dataset.tag.split(',').indexOf(inputValue) !== -1){
                img.classList.add('invisible');
            }else{
                img.classList.remove('invisible');
            }
        })
        tagInput.value = '';
    });
    clearBtn.addEventListener('click', function (e) {
        imgs.forEach(function (img) {
            img.classList.remove('invisible');
        })
    })
});