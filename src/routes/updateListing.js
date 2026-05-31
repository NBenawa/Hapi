import { db } from '../database';

export const updateListingRoute = {
    method: 'POST',
    path: '/api/listings/{id}',
    handler: async (req, h) => {
        const listingId = req.params.id;
        const { name, description, price } = req.payload || {};
        const user_id = 123;
        
        await db.query(
            'UPDATE listings SET name = ?, description = ?, price = ? WHERE id = ?',
            [name, description, price, listingId]
        );
        const results = await db.query(
            'SELECT * FROM listings WHERE id = ?',
            [listingId]
        );
        
        return results[0];
    }
};