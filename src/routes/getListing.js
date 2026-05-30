import { fakeListings } from './fake-data';

export const getListingRoute = {
    method: 'GET',
    path: '/api/listings/{id}',
    handler: (req, h) => {
        const listing = fakeListings.find(l => l.id === req.params.id);
        return listing;
    }
};