import boom from '@hapi/boom';
import { db } from '../database';

export const getListingRoute = {
    method: 'GET',
    path: '/api/listings/{id}',
    handler: async (req, h) => {
        const results = await db.query('SELECT * FROM listings WHERE id = ?', [req.params.id]);
        if (results.length === 0) {
            return boom.notFound('Listing not found');
        }
        return results[0];
    }
};