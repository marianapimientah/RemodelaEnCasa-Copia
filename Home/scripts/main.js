/*---------------------------------HEAD----------------------------------------------*/
addEventListener('DOMContentLoaded', () => {
    const btn_menu = document.querySelector('.btn-menu')
    if(btn_menu){
        btn_menu.addEventListener('click', () => {
            const items_menu = document.querySelector('.nav-items')
            items_menu.classList.toggle('show')
            const items_search = document.querySelector('.search-header')
            items_search.classList.toggle('show')
            const items_cartlog = document.querySelector('.cart-login')
            items_cartlog.classList.toggle('show')
        })
    }
})
/*---------------------------------CARDS SECTION TWO----------------------------------------------*/
let populares = [
    {
        product: "Floors SPC",
        price: "21K",
        measureOne: "130em",
        measureTwo: "230em",
        score: 4.8,
        poster: "https://i.im.ge/2022/09/09/OHCv34.Home2.jpg",
        cart: "https://cdn.lordicon.com/aoggitwj.json"
    },
    {
        product: "Blinds PVC",
        price: "12K",
        measureOne: "100cm",
        measureTwo: "150cm",
        score: 4.5,
        poster: "https://i.im.ge/2022/09/09/OHEAaC.Home3.jpg",
        cart: "https://cdn.lordicon.com/aoggitwj.json"
    },
    {
        product: "Carpet Tile",
        price: "10K",
        measureOne: "120cm",
        measureTwo: "240cm",
        score: 4.2,
        poster: "https://i.im.ge/2022/09/09/OHEYw1.Home4.jpg",
        cart: "https://cdn.lordicon.com/aoggitwj.json"
    },
]

const contenedor = document.querySelector('#container-cards');

function crearCard(popular)
{
    let card = `<div class="card">
                    <a href="../../Cart/index.html" target="_blank">
                    <div class="cont-sup">
                        <button id="btn-special">${popular.score}<i class="fa-solid fa-star"></i></button>
                        <img class="img-special" src="${popular.poster}" alt="${popular.product}">
                    </div>
                    <div class="cont-lr">
                    <div class="left-card">
                        <h4>${popular.product}</h4>
                        <button class="meht">${popular.measureOne}<button class="meht">${popular.measureTwo}</button></button>   
                    </div>
                    <div class="right-card">
                        <h5>${popular.price}</h5>
                        <a href="../../Cart/index.html" target="_blank">
                            <lord-icon class="icon"
                            src=${popular.cart}
                            trigger="hover"
                            colors="primary:#ff902b"
                            style="width:36px;height:36px">
                        </a>
                            </lord-icon>        
                    </div>  
                    </a>           
                </div>`;
    contenedor.innerHTML += card;
};

function renderizarPopulares(){
    contenedor.innerHTML = '';
    populares.forEach(popular => {
        crearCard(popular)
    })};
    
renderizarPopulares();
/*---------------------------------CARDS SECTION FIVE----------------------------------------------*/
let specialProducts = [
    {
        product: "Laminated Wood",
        price: "12 K",
        description: "Lorem ipsum dolor sit amet",
        score: 4.8,
        poster: "https://i.im.ge/2022/09/14/1TGlQW.Home6.jpg",
        cart: "https://cdn.lordicon.com/aoggitwj.json"
    },
    {
        product: "Decks",
        price: "12 K",
        description: "Lorem ipsum dolor sit amet",
        score: 4.5,
        poster: "https://i.im.ge/2022/09/14/1TGFnc.Home7.jpg",
        cart: "https://cdn.lordicon.com/aoggitwj.json"
    },
    {
        product: "Vinyl Roll",
        price: "12 K",
        description: "Lorem ipsum dolor sit amet",
        score: 4.2,
        poster: "https://i.im.ge/2022/09/14/1TGu3T.Home8.jpg",
        cart: "https://cdn.lordicon.com/aoggitwj.json"
    },
    {
        product: "Curtains",
        price: "12 K",
        description: "Lorem ipsum dolor sit amet",
        score: 4.8,
        poster: "https://i.im.ge/2022/09/14/1TGoRr.Home9.jpg",
        cart: "https://cdn.lordicon.com/aoggitwj.json"
    },
    {
        product: "Carpets",
        price: "12 K",
        description: "Lorem ipsum dolor sit amet",
        score: 4.5,
        poster: "https://i.im.ge/2022/09/14/1TGrL0.Home10.jpg",
        cart: "https://cdn.lordicon.com/aoggitwj.json"
    },
    {
        product: "Wood Floors",
        price: "12 K",
        description: "Lorem ipsum dolor sit amet",
        score: 4.2,
        poster: "https://i.im.ge/2022/09/14/1TG1qL.Home11.jpg",
        cart: "https://cdn.lordicon.com/aoggitwj.json"
    },
]

const contenedorSpecial = document.querySelector('#container-cards-special');

function crearCardSpecial(special)
{
    let cardSpecial = `<div class="cardSpecial">
                            <a href="../../Cart/index.html" target="_blank">
                            <div class="cont-sup">
                                <button id="btn-special">${special.score}<i class="fa-solid fa-star"></i></button>
                                <img class="img-special" src="${special.poster}" alt="${special.product}">
                            </div>
                            <div class="cont-lr">
                                <div class="left-card">
                                    <h4>${special.product}</h4>
                                    <p id="btn-left">${special.description}</p>    
                                </div>
                                <div class="right-card">
                                    <h5>${special.price}</h5>
                                    <a href="../../Cart/index.html" target="_blank">
                                        <lord-icon class="icon"
                                            src=${special.cart}
                                            trigger="hover"
                                            colors="primary:#ff902b"
                                            style="width:36px;height:36px">
                                    </a>
                                        </lord-icon>        
                                </div>             
                            </div>
                            </a>
                        </div>`;
    contenedorSpecial.innerHTML += cardSpecial;
};

function renderizarSpecials(){
    contenedorSpecial.innerHTML = '';
    specialProducts.forEach(special => {
        crearCardSpecial(special)
    })};

renderizarSpecials();

/*---------------------------------SLIDER-PERSONS----------------------------------------------*/
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("sl-one");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

let slideIndex2 = 0;
carousel();

function carousel() {
  let i;
  let x = document.getElementsByClassName("sl-one");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex2++;
  if (slideIndex2 > x.length) {slideIndex2 = 1}
  x[slideIndex2-1].style.display = "block";
  setTimeout(carousel, 2400); // Change image every 2 seconds
}
