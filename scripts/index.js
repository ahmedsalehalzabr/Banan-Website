var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true
  },
  spaceBetween: 60,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});




const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const pages = [
  { name: 'HOME', url: 'home.html' },
  { name: 'CONTACT', url: 'contact.html' },
  { name: 'HEALTH', url: 'health.html' },
  { name: 'EDUCATHON', url: 'education.html' }
];

searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value;
  const page = pages.find(p => p.name === searchTerm);
  if (page) {
    window.location.href = page.url;
  } else {
    alert('لم يتم العثور على الصفحة');
  }
});


