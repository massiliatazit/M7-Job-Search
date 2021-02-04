 const favoritesReducer= (state = [], action)=> {
    switch (action.type) {
      case "ADD_TO_FAVOURITES":
        return state.concat(action.payload);
      case "REMOVE_FROM_FAVOURITES":
        return state.filter((job) => job.id !== action.payload);
      default:
        return state;
    }
  }
  
export default favoritesReducer