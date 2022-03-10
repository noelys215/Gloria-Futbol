import {
	Box,
	CircularProgress,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
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
		<TableContainer
			className={classes.container}
			component={Paper}
			sx={{ display: 'flex', width: '100%', mb: 1, borderRadius: 1 }}>
			<Table sx={{ width: '80%', margin: 'auto' }}>
				<TableBody sx={{ display: 'flex', flexDirection: 'column', width: '50%', mr: 0 }}>
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
						<TableCell className={classes.teamText} align="left">
							{fixture[0]?.goals?.home}
						</TableCell>
						{/* Team */}
						<TableCell className={classes.teamText} align="center">
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
						<TableCell className={classes.teamText} align="left">
							{fixture[0]?.goals?.away}
						</TableCell>
						{/* Away Team */}
						<TableCell className={classes.teamText} align="center">
							{fixture[0].teams?.away?.name}
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
			<Typography
				variant="body"
				className={classes.item}
				sx={{ alignItems: 'center', width: 'auto' }}>
				{fixture[0].fixture.date.slice(11, 16)} {fixture[0].fixture.status.short}
			</Typography>
		</TableContainer>
	);
};

export default Fixtures;
