
const slides = document.querySelectorAll('.slide');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
let currentIndex = 0;

const getIndex = (isNext) => {
  if(isNext) {
    const newIndex = currentIndex+1 > slides.length-1 ? 0 : currentIndex+1;
    return newIndex;
  } 
  if(!isNext) {
    const newIndex = currentIndex+1 > slides.length-1 ? 0 : currentIndex+1;
    return newIndex;
  }
}

const slider = (isNext) => {
  const currentSlide = document.querySelector(`[data-index="${currentIndex}"]`);
  const newIndex = getIndex(isNext);
  const newSlide = document.querySelector(`[data-index="${newIndex}"]`);
  
  currentSlide.classList.add('hidden-slide');
  newSlide.classList.remove('hidden-slide');
  currentIndex = newIndex;
}

next.onclick = () => {
  const isNext = true;
  slider(isNext);
}

prev.onclick = () => {
  const isNext = false;
  slider(isNext);
}