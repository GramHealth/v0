import { configureStore } from '@reduxjs/toolkit';
import reducer_auth from './slice_auth';
import reducer_feed from './slice_feed';

const rootReducer = {
	auth: reducer_auth,
	user: reducer_auth,
	feed: reducer_feed,
};

export const store = configureStore({
	reducer: { ...rootReducer },
	devTools: {
		serialize: {
			options: true,
		},
	},
});
