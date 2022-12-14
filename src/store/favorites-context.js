import { createContext,useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {}
});

export function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoritesHandler(favoriteMeetup){
        //wiill always get the latest
        setUserFavorites((prevUserFavorites)=>{
            return prevUserFavorites.concat(favoriteMeetup);
        });
    }


    function removeFavoriteHandler(meetupId){
        setUserFavorites(prevUserFavorites => {
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId); 
        });
    }

    function itemIsFavoriteHandler(meetupId){
        return userFavorites.some(meetup => meetup.id === meetupId);
    }

    const context = {
        favorites: userFavorites, //object key with current user array
        totalFavorites: userFavorites.length,
        addFavorite: addFavoritesHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler

    };

//will pass new updated into this
    return <FavoritesContext.Provider value={context}>
        {props.children}

    </FavoritesContext.Provider>
}

export default FavoritesContext;