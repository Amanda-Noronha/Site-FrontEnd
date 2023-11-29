document.addEventListener('DOMContentLoaded', function() {
    var cabecalho = document.getElementById('cabecalho');
    var cabecalhoPosicao = cabecalho.offsetTop;
  
    function fixarCabecalho() {
      if (window.pageYOffset > cabecalhoPosicao) {
        cabecalho.classList.add('fixo');
      } else {
        cabecalho.classList.remove('fixo');
      }
    }
  
    window.onscroll = function() {
      fixarCabecalho();
    };
  
    // Adiciona comportamento suave ao rolar para as seções
    var linksNav = document.querySelectorAll('nav a');
  
    linksNav.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
  
        var targetId = this.getAttribute('href').substring(1);
        var targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - cabecalho.offsetHeight,
            behavior: 'smooth'
          });
        }
      });
    });
  });
      