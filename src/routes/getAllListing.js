import { db } from '../database';

export const getAllListingsRoute = {
    method: 'GET',
    path: '/api/listings',
    handler: async (req, h) => {
        try {
            const listings = await db.query('SELECT * FROM listings');
            return listings;
        } catch (err) {
            console.error(err);
            return h.response({ error: 'Failed to fetch listings' }).code(500);
        }
    }
};