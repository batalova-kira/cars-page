export const selectAllCars = (state) => state.cars.items;
export const selectFavoriteCars = (state) => state.cars.favorite;
export const selectCurrentPage = (state) => state.cars.currentPage;
// export const selectError = (state) => state.contacts.error;
// export const selectFilter = (state) => state.filter;

// export const selectVisibleContacts = (state) => {
//     const contacts = selectContacts(state);
//     const filter = selectFilter(state);
//     if (filter.trim() === "") {
//         return contacts;
//     }

//     return contacts.filter((item) => {
//         return item.name.toLowerCase().includes(filter.toLowerCase());
//     });
// };
