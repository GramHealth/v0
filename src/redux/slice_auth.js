import { createSlice } from '@reduxjs/toolkit';
// import { loadState } from "../localStorage";

// const initialState = loadState().user;

let init_user = {
	// ...normalized_affiliate_campaign_user,
	// profile: {
	// 	pic: dummy_user_pic,
	// 	name_given: 'Testing',
	// 	name_family: 'Toh Kar Do',
	// },

	loading_user: true,
};

export const auth_slice = createSlice({
	name: 'auth',
	initialState: init_user,
	reducers: {
		logout: (state) => {
			console.log('[Red > logout] User:', init_user);

			return {
				...init_user,
				loading_user: false,
			};
		},
		setUser: (state, action) => {
			console.log('[Red > setUser] > Setting User Data', action.payload);

			return {
				...state,
				...action.payload,
				loading_user: false,
			};
		},
		setNoUserFound: (state) => {
			state.loading_user = false;
		},
		setUserProfile: (state, action) => {
			state.profile = action.payload;
		},
	},
});

export const { logout, setUserProfile, setNoUserFound, setUser } =
	auth_slice.actions;

export default auth_slice.reducer;
