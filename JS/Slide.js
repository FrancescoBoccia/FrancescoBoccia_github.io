// Which image you clicked on

const imageNavigationLabel = document.querySelector(".image-navigation");

imageNavigationLabel.addEventListener("click", e => {
  const targetLabel = e.target.closest("label");

  if(!targetLabel) return;

  const currentSquare = imageNavigationLabel.querySelector(".current-square");

  currentSquare.classList.remove("current-square");
  targetLabel.classList.add("current-square");
})



// Touch Screen Slide 

const sliderContainer = document.querySelector (".slides"),
  slides = Array.from(document.querySelectorAll (".slide"))

let isDraggingTheImage = false,
  startPosition = 0,
  currentTranslate = 0,
  previousTranslate = 0,
  animationID = 0,
  currentIndex = 0

slides.forEach((slide, index) => {
  const removeSlideImage = slide.querySelector("img");
  removeSlideImage.addEventListener("dragstart", (e) => e.preventDefault());

  // Touch Event
  slide.addEventListener("touchstart", touchStart(index))
  slide.addEventListener("touchend", touchEnd)
  slide.addEventListener("touchmove", touchMove)



  // Mouse Event
  slide.addEventListener("mousedown", touchStart(index))
  slide.addEventListener("mouseup", touchEnd)
  slide.addEventListener("mouseleave", touchEnd)
  slide.addEventListener("mousemove", touchMove)
})

// Disable context menu
window.oncontextmenu = function (event) {
  event.preventDefault()
  event.stopPropagation()
  return false
}

function touchStart (index) {
  return function (event) {
    currentIndex = index
    startPosition = getPositionX(event)
    isDraggingTheImage = true

    animationID = requestAnimationFrame (animation)
    sliderContainer.classList.add ("grabbing")
  }
}

function touchEnd () {
  isDraggingTheImage = false
  cancelAnimationFrame(animationID)

  const movedBy = currentTranslate - previousTranslate

  if (movedBy < -100 && currentIndex < slides.length - 1)
  currentIndex += 1

  if (movedBy > 100 && currentIndex > 0)
  currentIndex -= 1

  setPositionByIndex()



  sliderContainer.classList.remove ("grabbing")

}

function touchMove (event) {
  if (isDraggingTheImage) {
    const currentPosition = getPositionX(event)
    currentTranslate = previousTranslate + currentPosition - startPosition
    console.log(previousTranslate);
    }
}

function getPositionX(event) {
  return event.type.includes ("mouse")
      ? event.pageX 
      : event.touches[0].clientX
}

function animation() {
  setSliderPosition()
  if (isDraggingTheImage) requestAnimationFrame(animation)
}

function setSliderPosition() {
  sliderContainer.style.transform = `translateX(${currentTranslate}px)`
}

function setPositionByIndex() {
  currentTranslate = currentIndex * -window.innerWidth
  previousTranslate = currentTranslate
  setSliderPosition()
}