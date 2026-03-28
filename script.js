// 搜索按钮功能
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

searchBtn.addEventListener("click", function () {
  const keyword = searchInput.value.trim();

  if (keyword === "") {
    alert("请输入搜索内容");
    return;
  }

  alert("你搜索的内容是：" + keyword);
});

// 轮播功能
let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;
const slidesContainer = document.querySelector('.carousel-slides');

function updateCarousel() {
  // 计算旋转角度
  const angle = -currentIndex * (360 / totalSlides);
  slidesContainer.style.transform = `rotateY(${angle}deg)`;
  
  // 更新 active 状态
  slides.forEach((slide, index) => {
    slide.classList.remove('active');
    if (index === currentIndex) {
      slide.classList.add('active');
    }
  });
}

document.getElementById('nextBtn').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateCarousel();
});

document.getElementById('prevBtn').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateCarousel();
});

// 自动播放（可选）
setInterval(() => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateCarousel();
}, 5000);