import  {getElementById}  from "./generalService.js"

const $activateButtonNav = getElementById('active-button-nav')
const $desactiveButtonNav = getElementById('desactive-button-nav')
const $navMobile = getElementById('nav-mobile') 
$activateButtonNav.addEventListener('click', _ =>{

  $navMobile.classList.add('nav-mobile-active')
  console.log('active');
  
  
})
$desactiveButtonNav.addEventListener('click', _ =>{
  
  $navMobile.classList.remove('nav-mobile-active')
  
  console.log('desactivado');
 
  
})
console.log($desactiveButtonNav);

