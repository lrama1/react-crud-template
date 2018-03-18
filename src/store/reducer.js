
const initialState = {
  brand: 'Olengskis'
};

const reducer = (state = initialState, action) => {
    if(action.type === 'BRAND_CHANGE'){
        return {
            ...state,
            brand: action.value
        }
    }
    return state;
}

export default reducer;