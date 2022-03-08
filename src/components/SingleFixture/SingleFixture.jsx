import {
	Box,
	CircularProgress,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableRow,
	Typography,
} from '@mui/material';
import { useStyles } from './styles';
import { useGetMatchDayQuery } from '../../services/footballApi';

const Fixtures = ({ fixtureId }) => {
	const { data, isFetching } = useGetMatchDayQuery(fixtureId);

	const classes = useStyles();

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

	const fixture = data?.response;

	return (
		<Paper
			className={classes.container}
			elevation={2}
			sx={{
				display: 'flex',
				borderRadius: 2,
				mb: 1,
			}}>
			<Table>
				<TableBody
					className={classes.item}
					sx={{ display: 'flex', flexDirection: 'column' }}>
					{/* Home */}
					<TableRow sx={{ height: '50px' }}>
						{/* Badge/Logo */}
						<TableCell style={{ fontSize: '1.45rem', border: 'none' }} align="center">
							<img
								src={fixture[0]?.teams?.home?.logo}
								alt="team badge"
								style={{ width: '2.4rem', height: '2.4rem' }}
							/>
						</TableCell>
						{/* Score */}
						<TableCell className={classes.scoreName} align="left">
							{fixture[0]?.goals?.home}
						</TableCell>
						{/* Team */}
						<TableCell className={classes.scoreName} align="center">
							{fixture[0]?.teams?.home?.name}
						</TableCell>
					</TableRow>

					{/* Away */}
					<TableRow>
						{/* Badge/Logo */}
						<TableCell style={{ fontSize: '1.45rem', border: 'none' }} align="center">
							<img
								src={fixture[0]?.teams?.away?.logo}
								alt="team badge"
								style={{ width: '2.4rem', height: '2.4rem' }}
							/>
						</TableCell>
						{/* Away Score */}
						<TableCell className={classes.scoreName} align="left">
							{fixture[0]?.goals?.away}
						</TableCell>
						{/* Away Team */}
						<TableCell className={classes.scoreName} align="center">
							{fixture[0].teams?.away?.name}
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
			<Typography
				variant="body"
				className={classes.item}
				sx={{ justifyContent: 'end', alignItems: 'center' }}>
				{fixture[0].fixture.date.slice(11, 16)} {fixture[0].fixture.status.short}
			</Typography>
		</Paper>
	);
};

export default Fixtures;
