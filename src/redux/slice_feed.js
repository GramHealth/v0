import { createSlice } from '@reduxjs/toolkit';
// import { loadState } from "../localStorage";

// const initialState = loadState().user;

let init_feed = {
	// ...normalized_user_feed,
	feed: [],
	feed_companies: [],
	feed_org_wise: {},
	feed_type_wise: {},
	feed_opening_types: [],
	feed_title_wise: {},
	feed_exp_wise: {},
	feed_jobs: [],
	feed_intern: [],
	feed_gigs: [],
	feed_compete: [],
	search_feed: {},
	search_jobs: {},
	search_intern: {},
	search_gigs: {},
	search_compete: {},
	loading_feed: true,
};

export const slice_feed = createSlice({
	name: 'feed',
	initialState: init_feed,
	reducers: {
		logout: (state) => {
			console.log('[Red > logout] User:', init_feed);

			return {
				...init_feed,
				loading_feed: false,
			};
		},
		setFeed: (state, action) => {
			// console.group('State before update:', state);
			// console.log('[Red > setFeed] > Setting Feed Data', action.payload);

			// let new_feed = [...state.feed, ...action.payload];
			let new_feed = action.payload;
			// let companies = new_feed
			// 	.map((job) => job.organization)
			// 	.filter((value, index, array) => {
			// 		return array.indexOf(value) === index;
			// 	});

			// let org_wise = Map.groupBy(new_feed, ({ organization }) => organization);
			let org_wise = Object.groupBy(
				new_feed,
				({ organization }) => organization,
			);

			// console.log('org_wise:', org_wise);
			let companies = Object.keys(org_wise);
			let type_wise = Object.groupBy(new_feed, ({ entry_type }) => entry_type);
			let opportunity_types = Object.keys(type_wise);

			const updatedState = {
				...state,
				feed: new_feed,
				feed_org_wise: { ...org_wise },
				feed_companies: companies,
				feed_type_wise: { ...type_wise },
				feed_opening_types: opportunity_types,
				loading_feed: false,
			};

			// console.log('State after update:', updatedState);
			// console.groupEnd();

			return updatedState;
		},

		setSearchFeedItem: (state, action) => {
			let item = action.payload;
			state.search_feed[item.id] = item;
			// let _index = state.search_feed.indexOf((job) => job.id === jd);
			// if (!_index) {
			// 	state.search_feed.push(item);
			// } else {
			// 	// state.search_feed.splice(_index, 1, item);
			// 	state.search_feed[_index] = item;
			// }
		},
		setNoUserFound: (state) => {
			state.loading_feed = false;
		},
		setUserProfile: (state, action) => {
			state.profile = action.payload;
		},
	},
});

export const { setFeed, setSearchFeedItem } = slice_feed.actions;

export default slice_feed.reducer;
