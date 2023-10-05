

window.addEventListener('scroll', function() {
    const header = document.querySelector('.main-header');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
      header.classList.add('h-fixed');
    } else {
      header.classList.remove('h-fixed');
    }
  });


  document.querySelector('.menuIcons').addEventListener('click', function(){
    document.querySelector('#navbarNavAltMarkup').classList.add('openMenu');
  });

  document.querySelector('.menuClose').addEventListener('click', function(){
    document.querySelector('#navbarNavAltMarkup').classList.remove('openMenu');
  });

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav: false,
    responsiveClass:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:4,
            loop:false
        }
    }
})