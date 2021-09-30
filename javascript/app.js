// implementing the read more functionality
const readMoreBtn = document.querySelectorAll('.read-more')
readMoreBtn.forEach( btn => {
    btn.addEventListener('click', () => {
        btn.previousElementSibling.classList.toggle('u-hide')
        if(btn.previousElementSibling.classList.contains('u-hide')){
            btn.innerHTML="read more"
        }else{
            btn.innerHTML="read less"
        }
    })
})

// scrolling functionality
const scrollButtons = document.querySelectorAll('.blogs__navigation__button')
const scrollingBox = document.querySelector('.blogs-container')
scrollButtons[0].addEventListener('click', () => {
    scrollingBox.scrollBy({left:80, behavior: 'smooth'})
})
scrollButtons[1].addEventListener('click', () => {
    scrollingBox.scrollBy({left:-80, behavior: 'smooth'})
})