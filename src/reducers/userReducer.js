export const userReducer = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_ACTIVITIES':
            return [...state, ...action.payload.activities];
        default:
            return state;
    }
};