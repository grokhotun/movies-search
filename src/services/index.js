import movies from '../../films.json';

export default class MoviesSearchService {

    getResource() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // if (Math.random() > 0.85) reject(new Error('Something happend'));
                resolve(movies);
            }, 1000);
        });
    }

    getMovies = async () => {
        const result = await this.getResource();
        return result.map((item, index) => ({
            title: item.title,
            tags: item.tags
        }));
    };

}