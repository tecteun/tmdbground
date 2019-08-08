# tmdbground

themoviedb.org portal using React

The root page '/' shows a listing of the most popular movies on themoviedb.org.

## important!

Remember to 

change the API key in [src/utils/tmdb.js](./src/utils/tmdb.js) to get access to themoviedb.org
https://developers.themoviedb.org/3/getting-started/introduction

### local development
    
    $ npm install
    $ npm start

### production build

    $ npm install
    $ npm run build

Compiled, production ready output can then be found in ./build/

# Featuring

- Using built-in React components
- Most popular listing by default
- Search
- Infinite scrolling
- Movie details page
- Movie trailer view