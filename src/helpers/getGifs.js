export const getGifs = async (category) => {

    const API_KEY = 'z3Hw8H6th7PWEOEw21hTI77ToOd1ar6F';
    const URI = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=10`;

    const response = await fetch(URI);
    const { data } = await response.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        image: img.images.original.url
    }) );

    console.log(gifs);

    return gifs;


}