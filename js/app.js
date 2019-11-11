let imgs = document.querySelectorAll("img");
let showButton = document.querySelector("#showButton");
let hideButton = document.querySelector("#hideButton");
let tagInput = document.querySelector("#tagInput");
let clearFilter = document.querySelector('#clearFilter');

/*
console.log(imgs)

showButton.addEventListener('click', function(){
    let inputValue = tagInput.value;
    imgs.forEach(function(img) {
        if(img.dataset.tag.split(',').indexOf(inputValue) != -1){
            img.classList.remove('invisible')
        }else{
            img.classList.add('invisible');
        }
    })
    tagInput.value = '';
})

hideButton.addEventListener('click', function(){
    let inputValue = input.value;
    imgs.forEach(function(img) {
        if(img.dataset.tag.split(',').indexOf(inputValue) != -1){
            img.classList.add('invisible')
        }else{
            img.classList.remove('invisible');
        }
    })
    tagInput.value = '';
})

clearFilter.addEventListener('click', function(){
    imgs.forEach(function (img) {
        img.classList.remove('invisible');
    })
})*/
