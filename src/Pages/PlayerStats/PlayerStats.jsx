import {
	TableContainer,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Paper,
	Grid,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { pageAnimation } from '../../Utils/Motions/BoxMotion';
import { useStyles } from './styles';
import PlayerGoals from './PlayerGoals';
import PlayerAssists from './PlayerAssists';
import RedCards from './RedCards';
import YellowCards from './YellowCards';

const RightBar = ({ league }) => {
	const classes = useStyles();
	return (
		<AnimatePresence>
			<motion.div {...pageAnimation}>
				<Grid
					container
					spacing={window.innerWidth < 920 ? '' : 1}
					className={classes.container}>
					{/* Top Scorer */}
					<Grid item sx={{ width: '100%', mb: 1 }} sm={12} md={6} lg={6} xl={6}>
						<TableContainer
							className={classes.grid}
							component={Paper}
							sx={{ width: '100%', borderRadius: 1 }}>
							<Table size="small">
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
									<PlayerGoals league={league} />
								</TableBody>
							</Table>
						</TableContainer>
					</Grid>

					{/* Most Assists */}
					<Grid item sx={{ width: '100%', mb: 1 }} md={6} lg={6} xl={6}>
						<TableContainer
							className={classes.grid}
							component={Paper}
							sx={{ width: '100%', borderRadius: 1 }}>
							<Table size="small">
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
									<PlayerAssists league={league} />
								</TableBody>
							</Table>
						</TableContainer>
					</Grid>

					{/* Red Cards */}
					<Grid item sx={{ width: '100%', mb: 1 }} md={6} lg={6} xl={6}>
						<TableContainer
							className={classes.grid}
							component={Paper}
							sx={{ width: '100%', borderRadius: 1 }}>
							<Table size="small">
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
									<RedCards league={league} />
								</TableBody>
							</Table>
						</TableContainer>
					</Grid>

					{/* Yellow Cards */}
					<Grid item sx={{ width: '100%', mb: 1 }} md={6} lg={6} xl={6}>
						<TableContainer
							className={classes.grid}
							component={Paper}
							sx={{ width: '100%', borderRadius: 1 }}>
							<Table size="small">
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
									<YellowCards league={league} />
								</TableBody>
							</Table>
						</TableContainer>
					</Grid>
				</Grid>
			</motion.div>
		</AnimatePresence>
	);
};

export default RightBar;
