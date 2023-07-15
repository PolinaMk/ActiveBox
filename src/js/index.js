window.onscroll = () => {
    const header = document.querySelector('.header');
    const promo = document.querySelector('.promo');
    const Y = window.scrollY;
    const heightPromo = promo.clientHeight;

    if (Y > heightPromo) {
        header.classList.add("header__scrolled");
    } else {
        header.classList.remove("header__scrolled");
    };
}

// Burger
const burgerOpen = document.querySelector('.burger');
const navigation = document.querySelector('.header__nav');
const promo = document.querySelector('.promo');
const promoContent = document.querySelector('.promo__wrapper');
const header = document.querySelector('.header');

burgerOpen.addEventListener("click", () => {
    burgerOpen.classList.toggle("burger-cross");
    promoContent.classList.toggle("hidden");
    promo.classList.toggle("promo-fixed");
    navigation.classList.toggle("header__nav-burger");
    // header.classList.toggle("header__scrolled");
    header.classList.toggle("header__burger-menu");
    document.body.classList.toggle("hidden-html");
});