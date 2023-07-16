function toggleMenu() {
	const navMenu = document.querySelector('.nav-menu');
	const burger = document.querySelector('.burger');
	navMenu.classList.toggle('active');
	burger.classList.toggle('active');
  }
  


const carousel = document.querySelector('.carousel');
  const prevButton = document.querySelector('.prev-btn');
  const nextButton = document.querySelector('.next-btn');
  
  let slideIndex = 0;
  
  function showSlides() {
    const slides = carousel.getElementsByClassName('flexbox');
    if (slides.length === 0) return;
    
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    
    // Display the current slide
    slides[slideIndex].style.display = 'flex';
  }
  
  function prevSlide() {
    slideIndex--;
    if (slideIndex < 0) {
      slideIndex = carousel.getElementsByClassName('flexbox').length - 1;
    }
    showSlides();
  }
  
  function nextSlide() {
    slideIndex++;
    if (slideIndex >= carousel.getElementsByClassName('flexbox').length) {
      slideIndex = 0;
    }
    showSlides();
  }
  
  showSlides();























































  const gameBoard = document.querySelector('.game-board');
  let revealedSquares = [];
  let matchedSquares = [];
  
  const numbers = [
	1, 1,
	2, 2,
	3, 3,
	4, 4,
	5, 5,
	6, 6,
	7, 7,
	8, 8
  ];
  
  function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
	  const j = Math.floor(Math.random() * (i + 1));
	  [array[i], array[j]] = [array[j], array[i]];
	}
  }
  
  function initializeGame() {
	shuffleArray(numbers);
	gameBoard.innerHTML = '';
	numbers.forEach((number) => {
	  const square = document.createElement('div');
	  square.classList.add('game-square');
	  square.textContent = number;
	  square.addEventListener('click', () => {
		revealSquare(square);
	  });
	  gameBoard.appendChild(square);
	});
  }
  
  function revealSquare(square) {
	if (!square.classList.contains('show') && !square.classList.contains('matched')) {
	  square.classList.add('show');
	  revealedSquares.push(square);
	  if (revealedSquares.length === 2) {
		checkMatch();
	  }
	}
  }
  
  function checkMatch() {
	const [square1, square2] = revealedSquares;
	const number1 = parseInt(square1.textContent);
	const number2 = parseInt(square2.textContent);
	if (number1 === number2) {
	  square1.classList.add('matched');
	  square2.classList.add('matched');
	  matchedSquares.push(square1, square2);
	  if (matchedSquares.length === 16) {
		setTimeout(() => {
		  alert('Congratulations! You matched all numbers!');
		  resetGame();
		}, 500);
	  }
	} else {
	  setTimeout(() => {
		square1.classList.remove('show');
		square2.classList.remove('show');
	  }, 300);
	}
	revealedSquares = [];
  }
  
  function resetGame() {
	revealedSquares = [];
	matchedSquares = [];
	initializeGame();
  }
  
  initializeGame();
  

  