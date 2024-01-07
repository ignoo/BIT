const movies = [
    {
        movie: 'gugis',
        rating: 99,
    },
    {
        movie: 'Za matriks',
        rating: 26,
    }
]

movies.forEach(item => {
    console.log(`${item.movie}`);
})

movies.forEach(item => {
    console.log(item.movie, '-', item.rating,'/100');
})