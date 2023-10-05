

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