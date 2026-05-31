import { db } from '../database';

export const getAllListingsRoute = {
    method: 'GET',
    path: '/api/listings',
    handler: (req, h) => {
        return db.query('SELECT * FROM listings')
            .then(results => results)
            .catch(err => {
                console.error('Error fetching listings:', err);
                return h.response({ error: 'Failed to fetch listings' }).code(500);
            });
    }
}