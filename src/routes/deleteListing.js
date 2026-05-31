import { db } from '../database';

export const deleteListingRoute = {
    method: 'DELETE',
    path: '/api/listings/{id}',
    handler: async (req, h) => {
        const listingId = req.params.id;

        await db.query(
            'DELETE FROM listings WHERE id = ?',
            [listingId]
        );

        return { message: 'Listing deleted successfully' };
    }
};