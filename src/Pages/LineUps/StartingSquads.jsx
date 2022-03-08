import { Box, CircularProgress, List, ListItem, Typography } from '@mui/material';
import { useStyles } from './styles';
import { useGetSingleLineUpQuery } from '../../services/footballApi';
import ErrorPage from '../../Pages/ErrorPage/ErrorPage';
import Subs from './Subs';

const StartingSquads = ({ fixtureId, isDarkTheme }) => {
	const classes = useStyles();

	const { data, error, isFetching } = useGetSingleLineUpQuery(fixtureId);

	const home = data?.response[0]?.startXI;
	const homeCoach =
		data?.response[1]?.coach?.name === undefined ? 'N/A' : data?.response[0]?.coach?.name;
	const homeName = data?.response[0]?.team?.name;
	const homeBadge = data?.response[0]?.team?.logo;
	const homeFormation = data?.response[0]?.formation;

	const away = data?.response[1]?.startXI;
	const awayCoach =
		data?.response[1]?.coach?.name === undefined ? 'N/A' : data?.response[1]?.coach?.name;
	const awayName = data?.response[1]?.team?.name;
	const awayBadge = data?.response[1]?.team?.logo;
	const awayFormation = data?.response[1]?.formation;

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
		<Typography
			className={classes.text}
			key={arr?.player?.id}
			gutterBottom
			sx={{ fontSize: '1.1rem' }}>
			{arr?.player?.pos}:&nbsp;&nbsp;
			{arr?.player?.name}
		</Typography>
	));

	const awayTeam = away?.map((arr, i) => (
		<Typography
			className={classes.text}
			key={arr?.player?.id}
			gutterBottom
			sx={{ fontSize: '1.1rem' }}>
			{arr?.player?.pos}:&nbsp;&nbsp;
			{arr?.player?.name}
		</Typography>
	));

	return (
		<>
			{homeTeam === undefined ? (
				<ErrorPage isDarkTheme={isDarkTheme} />
			) : (
				<>
					<List sx={{ display: 'flex' }}>
						<ListItem sx={{ flexDirection: 'column', alignItems: 'flex-start' }}>
							<Box height={'9.375rem'}>
								<Typography className={classes.teamName}>
									{homeName}&nbsp;
									<img alt="" src={homeBadge} className={classes.teamBadge} />
								</Typography>
								<Typography className={classes.text}>Coach</Typography>
								<Typography variant="inherit">{homeCoach}</Typography>
							</Box>
							<Typography className={classes.text}>Starting XI</Typography>
							<Typography className={classes.text}>({homeFormation})</Typography>
							{homeTeam}
						</ListItem>
						{/* Away Team */}
						<ListItem sx={{ flexDirection: 'column', alignItems: 'flex-start' }}>
							<Box height={'9.375rem'}>
								<Typography className={classes.teamName}>
									{awayName}&nbsp;
									<img alt="" src={awayBadge} className={classes.teamBadge} />
								</Typography>
								<Typography className={classes.text}>Coach</Typography>
								<Typography variant="inherit">{awayCoach}</Typography>
							</Box>

							<Typography className={classes.text}>Starting XI</Typography>
							<Typography className={classes.text}>({awayFormation})</Typography>
							{awayTeam}
						</ListItem>
					</List>
					<Subs fixtureId={fixtureId} isDarkTheme={isDarkTheme} />
				</>
			)}
		</>
	);
};

export default StartingSquads;
