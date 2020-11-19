export const initialState = {
    user: null,
    playlists:[],
    playing: false,
    item: null,
    //Remove the token after finishing development
    token : "BQBtKnWUq4snhz6onCphL0IJBagV-3ni-keOlZTqum8ZW3U4Ozr024ONsbQXIyLnQuaD8wy5SAQ3tsg43Dt_HBoa1o7IuMjSFGH_5Kfy-wFJnoW_ub1baBHv5K1n8WlGc-lY3TII-6APH8nZQ5p9TOH24e5UkkxPaYJZYiariSPJcEJw"
}

const reducer = (state, action) => {
    console.log(action);

    //Action -> type , [payload]
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
            case 'SET_TOKEN':
                return {
                    ...state,
                    token: action.token
                }
            case 'SET_PLAYLISTS':
                return {
                    ...state,
                    playlists: action.playlists,
                }        
            default:
                return state;
    }
}

export default reducer;