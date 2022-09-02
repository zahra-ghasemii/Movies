const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f943fd2ea8msh0a06b4822119dddp138d64jsne49d8463e755',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
};

fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=game%20of%20thr', options)
	.then(response => response.json())
	.then(data => {
        const list = data.d;

        list.map((item) => {
            const name = item.l;
            const poster = item.i.imageUrl;
            const movie = `<li><img src="${poster}"> <h2>${name}</h2></li>`
            document.querySelector('.movies').innerHTML += movie;
        })
    })
	.catch(err => console.error(err));