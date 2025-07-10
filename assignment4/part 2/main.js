const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');
/* Declaring the array of image filenames */
const fileNames = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg","pic5.jpg"];
/* Declaring the alternative text for each image file */
const altTitles = {
[fileNames[0]]:"Picture of close up eye",
[fileNames[1]]:"Image of rock face",
[fileNames[2]]:"Picture Of Blue & White Flowers",
[fileNames[3]]:"Old Heiroglyphics on wall",
[fileNames[4]]:"Picture of butterfly on a leaf",
};
/* Looping through images */
for (const file of fileNames)
{
const newImage = document.createElement('img');
newImage.setAttribute('src', `images/${file}`);
newImage.setAttribute('alt', altTitles[file]);
thumbBar.appendChild(newImage);
newImage.addEventListener("click", function () {
  displayedImage.src = newImage.src;
  displayedImage.alt = newImage.alt;
});
};
/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", function() {
  if (btn.className === "dark") {
    btn.className = "light";
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
  } else {
    btn.className = "dark";
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
  }
});