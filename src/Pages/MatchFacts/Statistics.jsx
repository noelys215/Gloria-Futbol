import { Box, CircularProgress, List, ListItem, Typography } from '@mui/material';
import { useStyles } from './styles';
import { useGetSingleFixtureQuery } from '../../services/footballApi';
import React from 'react';
import ErrorPage from '../../Pages/ErrorPage/ErrorPage';

export const Statistics = ({ fixtureId, isDarkTheme }) => {
	const classes = useStyles();

	const { data, isFetching } = useGetSingleFixtureQuery(fixtureId);

	const homeStats = data?.response[0]?.statistics;
	const awayStats = data?.response[1]?.statistics;

	if (isFetching) {
		return (
			<Box
				className={classes.container}
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					marginTop: '50%',
				}}>
				<CircularProgress />
			</Box>
		);
	}

	const stat = homeStats?.map((arr, i) => (
		<Typography key={i} gutterBottom sx={{ fontSize: '1.3rem' }}>
			{arr?.type}
		</Typography>
	));

	const away = awayStats?.map((arr, i) => (
		<Typography key={i} gutterBottom sx={{ fontSize: '1.3rem' }}>
			{arr?.value === null ? 0 : arr?.value}
		</Typography>
	));
	const home = homeStats?.map((arr, i) => (
		<Typography key={i} gutterBottom sx={{ fontSize: '1.3rem' }}>
			{arr?.value === null ? 0 : arr?.value}
		</Typography>
	));

	return (
		<>
			{awayStats === undefined ? (
				<ErrorPage isDarkTheme={isDarkTheme} />
			) : (
				<List sx={{ display: 'flex' }}>
					<ListItem
						className={classes.listItem}
						sx={{ flexDirection: 'column', width: 'auto' }}>
						{home}
					</ListItem>
					<ListItem
						className={classes.listItem}
						sx={{
							flexDirection: 'column',
							textAlign: 'center',
							width: '100%',
						}}>
						{stat}
					</ListItem>
					<ListItem
						className={classes.listItem}
						sx={{ flexDirection: 'column', width: 'auto' }}>
						{away}
					</ListItem>
				</List>
			)}
		</>
	);
};
