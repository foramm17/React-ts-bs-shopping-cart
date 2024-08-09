//src/pages/Wishlist.tsx

import React, { useEffect, useState } from 'react';
import { useFavorites } from '../context/FavoritesContext';
import { StoreItem } from '../components/StoreItem';
import { StoreItemProps } from '../components/StoreItem';

export function Wishlist() {
    const { favorites } = useFavorites();
    const [storeItems, setStoreItems] = useState<StoreItemProps[]>([]);

    useEffect(() => {
        // Fetch the data from your API
        fetch('https://api.escuelajs.co/api/v1/products') // Replace with your actual API endpoint
            .then(response => response.json())
            .then(data => setStoreItems(data))
            .catch(error => console.error('Error fetching store items:', error));
    }, []);

    // Filter the store items to get only the favorited ones
    const favoriteItems = storeItems.filter(item => favorites.includes(item.id));

    return (
        <div>
            <h1>My Wishlist</h1>
            {favoriteItems.length === 0 ? (
                <p>You haven't added any items to your wishlist yet.</p>
            ) : (
                <div className="row">
                    {favoriteItems.map(item => (
                        <div key={item.id} className="col-md-4 mb-4">
                            <StoreItem {...item} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}




// import React from 'react';
// import { useFavorites } from '../context/FavoritesContext';
// import { StoreItem, StoreItemProps } from '../components/StoreItem';

// // This should be replaced with your actual data source
// import storeItems from '../data/items.json';

// export function Wishlist() {
//     const { favorites } = useFavorites();

//     // Filter the store items to get only the favorited ones
//     const favoriteItems = storeItems.filter(item => favorites.includes(item.id));

//     return (
//         <div>
//             <h1>My Wishlist</h1>
//             {favoriteItems.length === 0 ? (
//                 <p>You haven't added any items to your wishlist yet.</p>
//             ) : (
//                 <div className="row">
//                     {favoriteItems.map(item => (
//                         <div key={item.id} className="col-md-4 mb-4">
//                             <StoreItem {...item} />
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// }