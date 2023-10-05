const imageContainer = document.getElementById('image-container');


let ready = false;
// let imgLoaded = 0;
let totalImages=0;

let photosArray = [];


// Unsplash API
const count = 30
const apiKey = '/'
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

function imgLoaded(){
    console.log('image loaded')
}


// Create Elements for Links & Photos, Add to DOM
function displayPhotos(){
    photosArray.forEach((photo) => {
        // Create <> to link to Unplash
        const item = document.createElement('a');
        item.setAttribute('href', photo.links.html);
        item.setAttribute('target', '_blank');
        //Create <img> for photo
        const img = document.createElement('img');
        img.setAttribute('src', photo.urls.regular);
        img.setAttribute('alt', photo.alt_discription);
        img.setAttribute('title', photo.alt_discription);
        // Put <img> inside <><, then put  both inside imageContainer
        //check if image loaded
        

        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

// Get photos form Unsplash API
async function getPhotos (){
    try{
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        console.log(photosArray)
        displayPhotos();
    }catch(error){

    }
}

//check to see if scrolling newar bottom of page,
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      getPhotos();
    }
  });

// On Load
getPhotos();