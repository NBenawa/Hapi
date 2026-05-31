import { fakeListings } from './fake-data';
import boom from '@hapi/boom';

export const getListingRoute = {
    method: 'GET',
    path: '/api/listings/{id}',
    handler: (req, h) => {
        const listing = fakeListings.find(l => l.id === req.params.id);
        if (!listing) {
            return boom.notFound('Listing not found');
        }
        return listing;
    }
};