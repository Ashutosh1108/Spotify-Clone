export const initialState = {
    user: null,
    playlists:[],
    playing: false,
    item: null,
    // remove after finish developing
    //token: "BQChBam4BcLHExWClaarGMWFQ2jTwRJwsRmWf2UMWKuq1OGQfgGS6wLzvweGwFqtsELCy4NwO-GQgMx3gq1P7NU8wRO94ajoNTbYiJFJKeHo7LbGHLWRNJCIAo2k9w3rVPhAmmCKk6A4j7Il9SYhgOxzE3_IWCb-FQA3j5x3hEEUKZrxREbC",
};

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            }
            case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            }
            case 'SET_PLAYLISTS':
                return {
                    ...state,
                    playlists: action.playlists,
                }

                case 'SET_DISCOVER_WEEKLY':
                return {
                    ...state,
                    discover_weekly: action.discover_weekly,
                }

            default:
                return state;
    }
}

export default reducer;