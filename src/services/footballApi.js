import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { format } from 'date-fns';
import { REHYDRATE } from 'redux-persist';

const baseUrl = process.env.REACT_APP_FOOTBALL_API_URL;

const footballApiHeaders = {
	'x-rapidapi-host': process.env.REACT_APP_FOOTBALL_API_HOST,
	'x-rapidapi-key': process.env.REACT_APP_FOOTBALL_API_KEY,
};

const createRequest = (url) => ({ url, headers: footballApiHeaders });

export const footballApi = createApi({
	reducerPath: 'footballApi',
	baseQuery: fetchBaseQuery({ baseUrl }),
	extractRehydrationInfo(action, { reducerPath }) {
		if (action.type === REHYDRATE) {
			return action.payload[reducerPath];
		}
	},
	endpoints: (builder) => ({
		getStandings: builder.query({
			query: (league) =>
				createRequest(`/standings?league=${league}&season=${new Date().getFullYear() - 1}`),
		}),
		getTopScorer: builder.query({
			query: (league) =>
				createRequest(
					`/players/topscorers?league=${league}&season=${new Date().getFullYear() - 1}`
				),
		}),
		getMostAssists: builder.query({
			query: (league) =>
				createRequest(
					`/players/topassists?league=${league}&season=${new Date().getFullYear() - 1}`
				),
		}),
		getMostRedCards: builder.query({
			query: (league) =>
				createRequest(
					`/players/topredcards?league=${league}&season=${new Date().getFullYear() - 1}`
				),
		}),
		getMostYellowCards: builder.query({
			query: (league) =>
				createRequest(
					`/players/topyellowcards?league=${league}&season=${
						new Date().getFullYear() - 1
					}`
				),
		}),
		getFixtures: builder.query({
			query: ({ fixtureId, league, selectedDate = format(new Date(), 'yyyy-MM-dd') }) =>
				createRequest(`/fixtures?league=${league}&season=${
					new Date().getFullYear() - 1
				}&date=${selectedDate}&timezone=America/New_York
			`),
		}),
		getSingleFixture: builder.query({
			query: (fixtureId) =>
				createRequest(`/fixtures/statistics?fixture=${fixtureId}
			`),
		}),
		getMatchDay: builder.query({
			query: (fixtureId) =>
				createRequest(`/fixtures?id=${fixtureId}&timezone=America/New_York
			`),
		}),
		getSingleLineUp: builder.query({
			query: (fixtureId) => createRequest(`/fixtures/lineups?fixture=${fixtureId}`),
		}),
		getEvents: builder.query({
			query: (fixtureId) => createRequest(`/fixtures/events?fixture=${fixtureId}`),
		}),
	}),
});

export const {
	useGetStandingsQuery,
	useGetTopScorerQuery,
	useGetMostAssistsQuery,
	useGetFixturesQuery,
	useGetSingleFixtureQuery,
	useGetSingleLineUpQuery,
	useGetEventsQuery,
	useGetMatchDayQuery,
	useGetMostRedCardsQuery,
	useGetMostYellowCardsQuery,
} = footballApi;
