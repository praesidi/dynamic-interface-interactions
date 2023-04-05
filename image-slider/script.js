const images = ["./img/image-1.jpg", "./img/image-2.jpg", "./img/image-3.jpg"];

let imageIndex = 1;

const imageContainer = document.getElementById("image-container");
const sliderDotBtns = Array.from(document.querySelectorAll(".dot"));
const prevImageBtn = document.getElementById("prev-image-btn");
const nextImageBtn = document.getElementById("next-image-btn");

function markDot(id) {
  sliderDotBtns.forEach((dot) => {
    dot.classList.remove("dot-active");
  });

  sliderDotBtns[id].classList.add("dot-active");
}

function showImage(index) {
  imageContainer.style.backgroundImage = `url(${images[index]})`;
  markDot(index);
}

function showNextImage() {
  if (imageIndex === images.length - 1) {
    imageIndex = 0;
    showImage(imageIndex);
  } else {
    imageIndex += 1;
    showImage(imageIndex);
  }
}

function showPreviousImage() {
  if (imageIndex === 0) {
    imageIndex = images.length - 1;
    showImage(imageIndex);
  } else {
    imageIndex -= 1;
    showImage(imageIndex);
  }
}

function showSelectedImage(e) {
  imageIndex = Number(e.target.id);
  showImage(imageIndex);
}

function updateImageEachFiveSec() {
  showNextImage();
  setTimeout(updateImageEachFiveSec, 5000);
}

sliderDotBtns.forEach((dot) => {
  dot.addEventListener("click", showSelectedImage);
});

prevImageBtn.addEventListener("click", showPreviousImage);
nextImageBtn.addEventListener("click", showNextImage);

showImage(1); //load first image
setTimeout(updateImageEachFiveSec, 5000); // update image each 5 seconds
