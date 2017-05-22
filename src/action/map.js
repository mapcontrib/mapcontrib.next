export const increaseZoom = () => ({
    type: 'INCREASE_ZOOM',
});

export const decreaseZoom = () => ({
    type: 'DECREASE_ZOOM',
});

export const setZoom = zoom => ({
    type: 'SET_ZOOM',
    zoom,
});
