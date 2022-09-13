const url = `https://api.thecatapi.com/v1/images/search?limit=3`;
const api_key = "live_19dYB2E7RxUutzLp3qmV6KjmFuzEYxvU1jWD7Xd9fHMXGs2NP9Wu35ZFlvdDihV1"

fetch(url,{headers: {
    'x-api-key': api_key
  }})
.then((response) => {
 return response.json();
})
.then((data) => {
let imagesData = data;
imagesData.map(function(imageData) {
  
    let image = document.createElement('img');
    //use the url from the image object
    image.src = `${imageData.url}`;
        
    let gridCell = document.createElement('div');
    gridCell.classList.add('col');
    gridCell.classList.add('col-lg');
    gridCell.appendChild(image)
      
    document.getElementById('grid').appendChild(gridCell);
  
  });
})
.catch(function(error) {
 console.log(error);
});

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a4e863d63dmsh1c8d1d6573360cdp1f5cf1jsn3f96064ad730',
		'X-RapidAPI-Host': 'healthruwords.p.rapidapi.com'
	}
};

fetch('https://healthruwords.p.rapidapi.com/v1/quotes/?t=Wisdom&maxR=1&size=medium&id=731', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

