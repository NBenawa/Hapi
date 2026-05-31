import { db } from '../database';
import { v4 as uuid } from 'uuid';

const addListingRoute = {
    method: 'POST',
    path: '/api/listings',
    handler: async (req, h) => {
        const id = uuid();
        const { name = '', description = '', price = 0 } = req.payload || {};
        const user_id = 123;
        const views = 0;

        const result = await db.query(
            'INSERT INTO listings (id, name, description, price, user_id, views) VALUES (?, ?, ?, ?, ?, ?)',
            [id, name, description, price, user_id, views]
        );

        const newListing = await db.query(
            'SELECT * FROM listings WHERE id = ?',
            [id]
        );

        return newListing[0];
    }
};

export { addListingRoute };