import diacritic from 'diacritic';

const defaultState = {
    fragment: null,
    title: 'MapContrib',
    path: null,
};

const buildPath = (fragment, title) => {
    const cleanTitle = diacritic.clean(title);
    return `/t/${fragment}/${cleanTitle}`;
};

const theme = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_FRAGMENT':
            return {
                ...state,
                fragment: action.fragment,
                path: buildPath(action.fragment, state.title),
            };
        case 'SET_TITLE':
            return {
                ...state,
                title: action.title,
                path: buildPath(state.fragment, action.title),
            };
        default:
            return state;
    }
};

export default theme;
