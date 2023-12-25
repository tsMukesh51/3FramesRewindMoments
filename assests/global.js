class MainHeader extends HTMLElement {
  constructor() {
    super();
    this.querySelector(".hamburger-menu").addEventListener(
      "click",
      this.toggleSideMenu.bind(this)
    );
  }
  toggleSideMenu(evt) {
    evt.preventDefault();
    this.querySelector(".hamburger-menu").classList.toggle("open");
  }
}

customElements.define("main-header", MainHeader);

class SliderComponent extends HTMLElement {
  constructor() {
    super();
    this.initSlider();
  }
  initSlider() {
    var splide = new Splide(".splide", {
      type: "slide",
      speed: 320,
      rewind: true,
      rewindSpeed: 560,
      gap: "1rem",
      arrows: true,
      easing: "cubic-bezier(0.25, 1, 0.5, 1)",
      drag: "free",
      snap: true,
    });
    splide.mount();
  }
}
customElements.define("slider-component", SliderComponent);
