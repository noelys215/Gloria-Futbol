import {
	TableContainer,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Paper,
} from '@mui/material';
import { useStyles } from './styles';

import HalfPlayerAssists from './HalfPlayerAssists';
import HalfPlayerGoals from './HalfPlayerGoals';
import HalfPlayerReds from './HalfPlayerReds';
import HalfPlayerYellows from './HalfPlayerYellows';

const RightBar = ({ league }) => {
	const classes = useStyles();
	return (
		<>
			{/* Top Scorer */}
			<TableContainer
				component={Paper}
				sx={{ width: '320px', borderRadius: 1, ml: 'auto' }}
				className={classes.container}>
				<Table sx={{ minWidth: 'auto' }} size="small">
					<TableHead>
						<TableRow>
							<TableCell
								sx={{ fontSize: '1.3rem', width: '100%' }}
								align="center"
								colSpan={3}>
								Top Scorer
							</TableCell>
						</TableRow>
					</TableHead>

					{/* Player */}
					<TableBody>
						<HalfPlayerGoals league={league} />
					</TableBody>
				</Table>
			</TableContainer>

			{/* Most Assists */}
			<TableContainer
				className={classes.container}
				component={Paper}
				sx={{ width: '320px', borderRadius: 1, mt: 2, ml: 'auto' }}>
				<Table sx={{ minWidth: 'auto' }} size="small">
					<TableHead>
						<TableRow>
							<TableCell
								sx={{ fontSize: '1.3rem', width: '100%' }}
								align="center"
								colSpan={3}>
								Most Assists
							</TableCell>
						</TableRow>
					</TableHead>

					{/* Player */}
					<TableBody>
						<HalfPlayerAssists league={league} />
					</TableBody>
				</Table>
			</TableContainer>

			{/* Most Reds */}
			<TableContainer
				className={classes.container}
				component={Paper}
				sx={{ width: '320px', borderRadius: 1, mt: 2, ml: 'auto' }}>
				<Table sx={{ minWidth: 'auto' }} size="small">
					<TableHead>
						<TableRow>
							<TableCell
								sx={{ fontSize: '1.3rem', width: '100%' }}
								align="center"
								colSpan={3}>
								Red Cards
							</TableCell>
						</TableRow>
					</TableHead>

					{/* Player */}
					<TableBody>
						<HalfPlayerReds league={league} />
					</TableBody>
				</Table>
			</TableContainer>

			{/* Most Yellows */}
			<TableContainer
				className={classes.container}
				component={Paper}
				sx={{
					width: '320px',
					borderRadius: 1,
					mt: 2,
					ml: 'auto',
					mb: window.innerHeight <= 1179 ? 5 : 0,
				}}>
				<Table sx={{ minWidth: 'auto' }} size="small">
					<TableHead>
						<TableRow>
							<TableCell
								sx={{ fontSize: '1.3rem', width: '100%' }}
								align="center"
								colSpan={3}>
								Yellow Cards
							</TableCell>
						</TableRow>
					</TableHead>

					{/* Player */}
					<TableBody>
						<HalfPlayerYellows league={league} />
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
};

export default RightBar;
