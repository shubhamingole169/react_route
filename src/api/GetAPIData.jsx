export const getMoviesData = async() =>{
    try {
        const response = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=53b78dc4&s=titanic&page=1");
        const data = response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}