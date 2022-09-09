document.addEventListener('DOMContentLoaded', () => {
    console.log('Hello Bulma!');
  });
  

  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd1aa63a368msh58eb078b151ed8fp1005f6jsn83a1f7b7371f',
		'X-RapidAPI-Host': 'theaudiodb.p.rapidapi.com'
	}
};

fetch('https://theaudiodb.p.rapidapi.com/searchalbum.php?s=daft_punk', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));