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