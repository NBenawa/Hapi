import { addViewToListingRoute } from './addViewToListing';
import { getAllListingsRoute } from "./getAllListing";
import { getListingRoute } from './getListing';
import { getUserListingsRoute } from './getUserListings';
import { addListingRoute } from './createNewListing';
import { updateListingRoute } from './updateListing';
import { deleteListingRoute } from './deleteListing';

export default [
    addViewToListingRoute,
    getAllListingsRoute,
    getListingRoute,
    getUserListingsRoute,
    addListingRoute,
    updateListingRoute,
    deleteListingRoute,
];