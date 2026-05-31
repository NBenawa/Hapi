import { db } from '../database';

export const getUserListingsRoute = {
    method: 'GET',
    path: '/api/users/{id}/listings',
    handler: async (req, h) => {
        const userId = req.params.id;

        const results = await db.query(
            'SELECT * FROM listings WHERE user_id = ?',
            [userId]
        );

        return results;
    }
};