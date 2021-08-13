const toggleMenu=document.querySelector('.toggle')
const showCase=document.querySelector('.showcase')

toggleMenu.addEventListener("click",()=>{
    toggleMenu.classList.toggle('active')
    showCase.classList.toggle('active')

})