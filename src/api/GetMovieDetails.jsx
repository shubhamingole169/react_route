export const getMovieDetails = async({params}) =>{
    console.log("param",params);
    const id = params.movieID;

    try {
        const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=53b78dc4&s=titanic&page=1`);
        const data = response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}