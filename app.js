var allImages = {
  googlePixel: {
    googlePixel_1: {
      image: "./Images/googlepixel-1.jpeg",
    },
    googlePixel_2: {
      image: "./Images/googlepixel_2.jpeg",
    },
    googlePixel_3: {
      image: "./Images/googlepixel_3.jpeg",
    },
  },
  iphone: {
    image_1: {
      image: "./Images/iphone.jpeg",
    },
    image_2: {
      image: "./Images/phone_1.avif",
    },
  },
  samsung: {
    samsung_1: {
      image: "./Images/samsung_1.jpeg",
    },
    samsung_2: {
      image: "./Images/samsung_2.avif",
    },
  },
};

const images = document.getElementById("images");

// ALL PHONES RENDERED

function renderedAllPhones() {
  for (var key in allImages) {
    for (var key1 in allImages[key]) {
      images.innerHTML += `
     <div class="col-12 col-sm-12 col-md-6 col-lg-3 images">
                <img src="${allImages[key][key1].image}" onclick="handleClick('${allImages[key][key1].image}')" alt="phone_img">
            </div>
    `;
    }
  }
}
renderedAllPhones();

const popupImgBox = document.getElementById("popupImgBox");
const popupImg = document.getElementById("popupImg");
function handleClick(src) {
  popupImgBox.style.display = "flex";
  popupImg.src = src;
}
function closeImg() {
  popupImgBox.style.display = "none";
}

const all = document.getElementById("all");
const iphone = document.getElementById("iphone");
const samsung = document.getElementById("samsung");
const googlePixel = document.getElementById("googlePixel");

//  ONLY GOOGLE PIXEL PHONE RENDERED
function showGooglePxl() {
  images.innerHTML = "";
  for (var key in allImages.googlePixel) {
    console.log(allImages.googlePixel[key].image);
    images.innerHTML += `
     <div class="col-12 col-sm-12 col-md-6 col-lg-3 images">
                <img src="${allImages.googlePixel[key].image}" onclick="handleClick('${allImages.googlePixel[key].image}')" alt="phone_img">
            </div>
    `;
  }
}

//  ONLY IPHONE PHONE RENDERED
function showIphone() {
  images.innerHTML = "";
  for (var key in allImages.iphone) {
    console.log(allImages.iphone[key].image);
    images.innerHTML += `
      <div class="col-12 col-sm-12 col-md-6 col-lg-3 images">
      <img src="${allImages.iphone[key].image}" onclick="handleClick('${allImages.iphone[key].image}')" alt="phone_img">
      </div>
      `;
  }
}

//  ONLY SAMSUNG PHONE RENDERED
function showSamsung() {
  images.innerHTML = "";
  for (var key in allImages.samsung) {
    console.log(allImages.samsung[key].image);
    images.innerHTML += `
       <div class="col-12 col-sm-12 col-md-6 col-lg-3 images">
                  <img src="${allImages.samsung[key].image}" onclick="handleClick('${allImages.samsung[key].image}')" alt="phone_img">
              </div>
      `;
  }
}

//   ALL PHONES RENDERED
function allShow() {
  images.innerHTML = "";
  renderedAllPhones();
}
