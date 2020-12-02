var weatherapi = '91e7f58a088fbebb01caa33974b7bfb8';

// import {createApi} from 'unsplash-js';

// const unsplash = createApi({
//     accessKey:'Xg9iCCp7u4viMa-tXn2fuobt7YPL_S_TOKpw-XfpnEQ'
// });

var place = document.querySelector("#place-input");
var search = document.querySelector(".search-btn");
var imagePlace = document.querySelector(".image_wrap p");
var temp = document.querySelector(".temperature span");
var icon = document.querySelector("#weather-icon");
var description = document.querySelector(".icon_wrap p");

// unsplash.getPhotos({ query: `${place.value}` }).then(result => {
//     if (result.errors) {
//       // handle error here
//       console.log('error occurred: ', result.errors[0]);
//     } else {
//       const feed = result.response;
  
//       // extract total and results array from response
//       const { total, results } = feed;
  
//       // handle success here
//       console.log(`received ${results.length} photos out of ${total}`);
//       console.log('first photo: ', results[0]);
//     }
//   });

//"https://api.pexels.com/v1/search?query=nature&per_page=1"
search.addEventListener("click", function(){
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${place.value}&appid=91e7f58a088fbebb01caa33974b7bfb8`)
    .then(res => res.json())
    .then(result => {   
        imagePlace.textContent = result["name"]+", "+result["sys"]["country"];
        temp.textContent = Math.round(result["main"]["temp"] - 273);
        icon.setAttribute("src",`http://openweathermap.org/img/wn/${result["weather"][0]["icon"]}@2x.png`);
        description.textContent = result["weather"][0]["description"];
    }
    );
    console.log("hello");
});