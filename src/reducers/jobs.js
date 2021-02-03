const jobsReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_JOBS':
        return action.jobs;
      case 'LOAD_MORE_JOBS':
        return [...state, ...action.jobs];
        case "ADD_TO_FAVOURITES":
      return [
        ...state,...action.favorites]
      
    case "REMOVE_FROM_FAVOURITES":
      return [
        ...state.filter((id)=> action.payload !=id)]
    
    default:
        return state;
  }}
  export default jobsReducer;