const url = 'https://climate-news-feed.p.rapidapi.com/?source=Nasa%20Climate&limit=50&exclude=The%20Guardian';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3062cd33dfmsh44b33fd397d42bbp11a3e0jsn6614856c8ccf',
		'X-RapidAPI-Host': 'climate-news-feed.p.rapidapi.com'
	}
};

console.log("from News.js")
async function weatherNews(){
    const response = await fetch(url, options);
try{ 
   let newsData = await response.json();
    console.log(newsData);
	// console.log(newsData.articles)
	const newsItem = newsData.articles;
	console.log(newsItem)
	
	let output = "";
	newsItem.map((item) => {
		console.log(item)

		// console.log(newsItem.articles)
		 return output += ` 
		<div class="colm">
		  <div id="thumbnail">
			  <img style="width:40px; margin-right:10px;" src="${item.thumbnail}"
				alt="img">
			</div>
			<div id="title">
			  <h5> ${item.title}
				<a href="${item.url}"><i>read more</i></a>
			  </h5>
			</div>
		  </div>`
	 
	})
	return output;
	// document.querySelector("#news").innerHTML=output;

}catch(error){
	console.log(error);
}

};

export default weatherNews();