
const defaultState = {
    zoom: 13,
    minZoom: 0,
    maxZoom: 18,
};

const map = (state = defaultState, action) => {
    switch (action.type) {
        case 'INCREASE_ZOOM':
            return {
                ...state,
                zoom: state.zoom === state.maxZoom ? state.zoom : state.zoom + 1,
            };
        case 'DECREASE_ZOOM':
            return {
                ...state,
                zoom: state.zoom === state.minZoom ? state.zoom : state.zoom - 1,
            };
        case 'SET_ZOOM':
            return {
                ...state,
                zoom: action.zoom,
            };
        default:
            return state;
    }
};

export default map;
