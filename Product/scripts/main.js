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

/**----------------------Galeria------------------------------- */
function prueba(){
    
    let imagen = document.getElementById("imgCentral");
    console.log(imagen);
    imagen.setAttribute("src","./images/Home6.png");
}
function prueba1(){
    
    let imagen = document.getElementById("imgCentral");
    console.log(imagen);
    imagen.setAttribute("src","./images/Home11.png");
}
function prueba2(){
    
    let imagen = document.getElementById("imgCentral");
    console.log(imagen);
    imagen.setAttribute("src","./images/Home7.png");
}


