import { getElementById } from "./generalService.js"

const cardCriations = getElementById('contentCars')
function crearteCards(tagContent,srcImage,cardClass,titleCard) {
  const div = document.createElement('div')
  div.setAttribute('class','card-desktop')
  tagContent.append(div)
  const img = document.createElement('img')
  img.setAttribute('src',srcImage)
  img.setAttribute('class',cardClass)
  div.append(img)
  const h2 = document.createElement('h2')
  h2.textContent = titleCard
  div.append(h2)
}
function imgDesltopAndMobile(srcImage) {
  crearteCards(cardCriations,`../images/${srcImage}/image-deep-earth.jpg`,'img-card','deep earth')
  crearteCards(cardCriations,`../images/${srcImage}/image-night-arcade.jpg`,'img-card','night arcade')
  crearteCards(cardCriations,`../images/${srcImage}/image-soccer-team.jpg`,'img-card','soccer team vr')
  crearteCards(cardCriations,`../images/${srcImage}/image-grid.jpg`,'img-card','the grid')
  crearteCards(cardCriations,`../images/${srcImage}/image-from-above.jpg`,'img-card','from up obeve vr')
  crearteCards(cardCriations,`../images/${srcImage}/image-pocket-borealis.jpg`,'img-card','pocket borealis')
  crearteCards(cardCriations,`../images/${srcImage}/image-curiosity.jpg`,'img-card','The curiosity')
  crearteCards(cardCriations,`../images/${srcImage}/image-fisheye.jpg`,'img-card','make it fisheye')
}

const MAX_WIDTH_MOBILE = 375;
const MIN_WIDTH_MOBILE = 0;


if (window.innerWidth < MAX_WIDTH_MOBILE) {
  imgDesltopAndMobile('mobile')
  console.log('estoy pequeño');
  
}else{
  imgDesltopAndMobile('desktop')
  console.log('estoy grande');
}
  
  
  





