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
for (const file in fileNames)
{
const newImage = document.createElement('img');
newImage.setAttribute('src', `images/${file}`);
newImage.setAttribute('alt', [altTitles[file]]);
thumbBar.appendChild(newImage);
};
/* Wiring up the Darken/Lighten button */
