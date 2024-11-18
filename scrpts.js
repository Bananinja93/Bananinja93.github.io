AOS.init({
  duration: 1000, 
  once: true, 
});
/*Skills*/
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.classList.add('flipped');
    });
    
    card.addEventListener('mouseleave', () => {
      card.classList.remove('flipped');
    });
  });
/*Projects*/
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.classList.add('flipped');
    });
    
    card.addEventListener('mouseleave', () => {
      card.classList.remove('flipped');
    });
  });
  
  
/*Modal*/
  
  function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none"; 
  }
  
  function openModalFromCard(card) {
    const modal = document.getElementById("myModal");
    const modalMobileImg = document.getElementById("modalMobileImg"); 
    const modalImg = document.getElementById("modalImg");
    const captionText = document.getElementById("caption");
    
    const img = card.querySelector('.project-front img');
  const imgSrc = img.getAttribute('src');
  const mobileImgSrc = imgSrc.replace('.png', '-mobile.png');

  modalImg.src = imgSrc;
  modalMobileImg.src = mobileImgSrc;

  modal.style.display = "block"; 
  captionText.innerHTML = "Увеличенное изображение и мобильная версия";
  }

  /*Menu*/
  
  function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    const hamburger = document.querySelector(".hamburger");
    const menuAni = document.querySelector(".nav-links");
    const menuAnili = document.querySelectorAll('.nav-links li');
  
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
    menuAni.style.cssText = 'opacity:1;position:relative;margin-left: 0;top:0;text-align: center;';
    menuAnili.forEach((elem) =>{
      elem.style.width = "100%"
      elem.style.paddingBottom = "20px"
    })
  }
  /*Logo*/
  document.addEventListener("mouseenter", () => {
    const menuAni = document.querySelector(".nav-links");
    const menuAnili = document.querySelectorAll('.nav-links li');
    console.log(menuAnili);
    const circle = document.querySelector(".circle");

    
    setTimeout(() => {
      if (window.matchMedia('(min-width: 766px)').matches) {
        menuAnili.forEach((elem) =>{
        elem.style.width = "20%"
      })
      menuAni.style.cssText = 'width:100%; margin-left:0; opacity:1;';
      circle.style.transform = "translateX(-50px)";
      }
      else{
        
      }
    
    }, 50); 
});
