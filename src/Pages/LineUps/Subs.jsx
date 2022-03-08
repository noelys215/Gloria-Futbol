import { Box, CircularProgress, List, ListItem, Typography } from '@mui/material';
import { useStyles } from './styles';
import { useGetSingleLineUpQuery } from '../../services/footballApi';
import ErrorPage from '../../Pages/ErrorPage/ErrorPage';

const StartingSquads = ({ fixtureId }) => {
	const classes = useStyles();

	const { data, isFetching, error } = useGetSingleLineUpQuery(fixtureId);

	const home = data?.response[0]?.substitutes;
	const away = data?.response[1]?.substitutes;

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
	if (error) {
		return <ErrorPage />;
	}

	const homeTeam = home?.map((arr, i) => (
		<Typography key={arr?.player?.id} gutterBottom className={classes.text}>
			{arr?.player?.pos}:&nbsp;&nbsp;
			{arr?.player?.name}
		</Typography>
	));
	const awayTeam = away?.map((arr, i) => (
		<Typography key={arr?.player?.id} gutterBottom className={classes.text}>
			{arr?.player?.pos}:&nbsp;&nbsp;
			{arr?.player?.name}
		</Typography>
	));

	return (
		<>
			<List sx={{ display: 'flex' }}>
				<ListItem
					className={classes.text}
					sx={{ flexDirection: 'column', alignItems: 'flex-start' }}>
					<Typography>Substitutes</Typography>
					{homeTeam}
				</ListItem>
				<ListItem
					className={classes.text}
					sx={{ flexDirection: 'column', alignItems: 'flex-start' }}>
					<Typography>Substitutes</Typography>
					{awayTeam}
				</ListItem>
			</List>
		</>
	);
};

export default StartingSquads;
