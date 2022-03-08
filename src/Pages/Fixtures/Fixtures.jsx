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
import { useGetFixturesQuery } from '../../services/footballApi';
import { Link, Outlet } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { boxAnimation } from '../../Utils/Motions/BoxMotion';
import NoMatches from '../../Pages/ErrorPage/NoMatches';

const Fixtures = ({ league, selectedDate, fixtureId, setFixtureId }) => {
	const { data, isFetching } = useGetFixturesQuery({ league, selectedDate, fixtureId });
	const classes = useStyles();
	const fixture = data?.response;

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

	return fixture.length === 0 ? (
		<NoMatches />
	) : (
		<AnimatePresence>
			{fixture.map((arr, i) => (
				<Box
					className={classes.container}
					sx={{ margin: 'auto' }}
					spacing={0}
					key={fixture[i]?.fixture?.id}
					id={fixture[i]?.fixture?.id}>
					<motion.div {...boxAnimation} transition={{ delay: i * 0.2 }}>
						<Link to="/details/lineups" style={{ textDecoration: 'none' }}>
							<Paper
								className={classes.paper}
								elevation={1}
								sx={{
									display: 'flex',
									borderRadius: 2,
								}}
								onClick={() => {
									setFixtureId(fixture[i]?.fixture?.id);
									localStorage.setItem('fixture', JSON.stringify(fixtureId));
								}}>
								<Table>
									<TableBody
										className={classes.item}
										sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
										{/* Home */}
										<TableRow sx={{ height: '50px' }}>
											{/* Badge/Logo */}
											<TableCell
												className={classes.teamText}
												style={{ fontSize: '1.45rem', border: 'none' }}
												align="center">
												<img
													src={arr?.teams?.home?.logo}
													alt="team badge"
													style={{ width: '2.4rem', height: '2.4rem' }}
												/>
											</TableCell>
											{/* Score */}
											<TableCell
												className={classes.teamText}
												sx={{
													fontSize: '1.45rem',
													paddingLeft: 0,
													width: 'auto',
													border: 'none',
												}}
												align="left">
												{arr?.score?.fulltime?.home}
											</TableCell>
											{/* Team */}
											<TableCell
												className={classes.teamText}
												style={{
													padding: 0,
													width: 'auto',
													border: 'none',
												}}
												align="left">
												{arr?.teams?.home?.name}
											</TableCell>
										</TableRow>

										{/* Away */}
										<TableRow>
											{/* Badge/Logo */}
											<TableCell
												className={classes.teamText}
												style={{ fontSize: '1.45rem', border: 'none' }}
												align="center">
												<img
													src={arr?.teams?.away?.logo}
													alt="team badge"
													style={{ width: '2.4rem', height: '2.4rem' }}
												/>
											</TableCell>
											{/* Away Score */}
											<TableCell
												className={classes.teamText}
												sx={{
													fontSize: '1.45rem',
													paddingLeft: 0,
													width: 'auto',
													border: 'none',
												}}
												align="left">
												{arr?.score?.fulltime?.away}
											</TableCell>
											{/* Away Team */}
											<TableCell
												className={classes.teamText}
												style={{
													paddingLeft: 0,
													border: 'none',
												}}
												align="left">
												{arr?.teams?.away?.name}
											</TableCell>
										</TableRow>
									</TableBody>
								</Table>
								<Typography
									variant="body"
									className={classes.item}
									sx={{ justifyContent: 'end', alignItems: 'center' }}>
									{arr.fixture.date.slice(11, 16)} {arr.fixture.status.short}
								</Typography>
							</Paper>
						</Link>
					</motion.div>
				</Box>
			))}
			<Outlet />
		</AnimatePresence>
	);
};

export default Fixtures;
