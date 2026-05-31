import { db } from '../database.js';

export const addViewToListingRoute = {
    method: 'POST',
    path: '/api/listings/{id}/add-view',
    handler: async (req, h) => {
        const listingId = req.params.id;

        await db.execute(
            'UPDATE listings SET views = IFNULL(views, 0) + 1 WHERE id = ?',
            [listingId]
        );

        const [rows] = await db.execute(
            'SELECT * FROM listings WHERE id = ?',
            [listingId]
        );

        return rows[0];
    }
};