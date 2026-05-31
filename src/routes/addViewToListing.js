import { db } from '../database.js';

export const addViewToListingRoute = {
    method: 'POST',
    path: '/api/listings/{id}/add-view',
    handler: async (req, h) => {
        const listingId = req.params.id;

        await db.query(
            'UPDATE listings SET views = views + 1 WHERE id = ?',
            [listingId]
        );

        const results = await db.query(
            'SELECT * FROM listings WHERE id = ?',
            [listingId]
        );

        return results[0];
    }
};