import { fakeListings } from './fake-data';

export const getAllListingsRoute = {
    method: 'GET',
    path: '/listings',
    handler: (req, h) => {
        return fakeListings;
    }
}