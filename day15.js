/* 
Here we have the Netflix app but it's up to you to make it work by pulling all the movies using an API!

- getOriginals()
  * URL : 'https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213'
- getTrendingNow()
  * URL : 'https://api.themoviedb.org/3/trending/movie/week?api_key=19f84e11932abbc79e6d83f82d6d1045'
- getTopRated()
  * URL : 'https://api.themoviedb.org/3/movie/top_rated?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1'
** These functions will provide the URL you need to fetch() movies of that genere **
These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 CLASS 👉 'original__movies' = Div that holds Netflix Originals
#2 ID 👉 'trending' = Div that holds trending Movies
#3 ID 👉 'top_rated' = Div that holds top rated Movies
*/
// parameters used
    // url we give what kind of url we need (url of orginals || trending || TopRated)
    // dom_element we give the tpye whether it is Orginals || Trending || TopRated
    // path_type gives the type of file which is gonna be displayed (backdrop_path || poster_path)

// Call the main functions the page is loaded =>1
window.onload = () => {
    getOriginals()
    getTrendingNow()
    getTopRated()
  }

  // ** function that makes dynamic API calls **
  function fetchMovies(url, dom_element, path_type) {
    
    fetch(url)
    .then(response => {
        if(response.ok){
            return response.json()
        }
        else{
            throw new error("something went wrong")
        }
    }).then(data =>{
        showMovies(data,dom_element,path_type)
    }).catch(error =>{ 
        console.log(error);
    })
  }
  //  ** Function that displays the movies to the DOM **
  showMovies = (movies, dom_element, path_type) => { 
    // Create a variable that grabs id or class  line 13,14,15
      let moviesElement = document.querySelector(dom_element)

    // Loop through object
    for(let movie of movies.results){
        console.log(movie);
          
      // Within loop create an img element to create an img tag inside HTML
        var imageElement = document.createElement('img')
  
      // Set attribute (getting the id from the api object and set it in HTML)
        imageElement.setAttribute('data-id',movie.id)
  
      // Set source
         imageElement.src = `https://image.tmdb.org/t/p/original${movie[path_type]}`
  
      // Add event listener to handleMovieSelection() onClick
       
    
      // Append the imageElement to the dom_element selected
        moviesElement.appendChild(imageElement)
    }

  
    }
  
  // ** Function that fetches Netflix Originals **
  function getOriginals() {
    let url =  
    'https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213'
    
  fetchMovies(url,'.original__movies','posterpath')
   

  }
  // ** Function that fetches Trending Movies **
  function getTrendingNow() {
    let url =
    'https://api.themoviedb.org/3/trending/movie/week?api_key=19f84e11932abbc79e6d83f82d6d1045'
  fetchMovies(url, '#trending', 'backdrop_path')
  }
  // ** Function that fetches Top Rated Movies **
  function getTopRated() {
    let url =
    'https://api.themoviedb.org/3/movie/top_rated?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1'
  fetchMovies(url, '#top_rated', 'backdrop_path')
  }
  
  // ** BONUS **
  
  // ** Fetches URL provided and returns response.json()
  async function getMovieTrailer(id) {
    //URL: `https://api.themoviedb.org/3/movie/${id}/videos?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US`
  
  }
  
  // ** Function that adds movie data to the DOM
  const setTrailer = trailers => {
    // Set up iframe variable to hold id of the movieTrailer Element

    // Set up variable to select .movieNotFound element
  
    // If there is a trailer add the src for it
    if (trailers.length > 0) {
      // add d-none class to movieNotFound and remove it from iframe
  
      // add youtube link with trailers key to iframe.src
    } else {
      // Else remove d-none class to movieNotfound and ADD it to iframe
  
    }
  }