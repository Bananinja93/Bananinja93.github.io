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
  
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
  }