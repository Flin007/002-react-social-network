const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SETUSERS';


let initialState = {
    users: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SETUSERS:
            return {
                ...state,
                users: [...state.users, ...action.users] //Склеиваем юзеров
                //users: action.users - так отрабатывает верно
            }
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true};
                    }
                    return user;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false};
                    }
                    return user;
                })
            };
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unFollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SETUSERS, users});

export default usersReducer;