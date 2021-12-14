import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice(
    {
        name: 'user',
        initialState: {
            name: '',
            lastName: '',
            email: '',
            password: '',
            isLoggedIn: false,

        },
        reducers: {
            setUser: (state, action) => {
                state.name = action.payload.name;
                state.lastName = action.payload.lastName;
                state.email = action.payload.email;
                state.password = action.payload.password;
            },
            setIsLoggedIn: (state) => {
                state.isLoggedIn = true;
            },
            setIsLoggedOut: (state) => {
                state.isLoggedIn = false;
                state.name = '';
                state.lastName = '';
                state.email = '';
                state.password = '';

            }
        },
    }
)
export const {setUser, setIsLoggedIn, setIsLoggedOut} = userSlice.actions;
export default userSlice.reducer