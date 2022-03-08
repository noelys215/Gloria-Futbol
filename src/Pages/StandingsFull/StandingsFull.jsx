import {
	TableContainer,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Paper,
} from '@mui/material';
import FullTable from './FullTable';
import { motion, AnimatePresence } from 'framer-motion';
import { pageAnimation } from '../../Utils/Motions/BoxMotion';
import { useStyles } from './styles';

const LeftBar = ({ league }) => {
	const classes = useStyles();
	return (
		<AnimatePresence>
			<motion.div {...pageAnimation}>
				<TableContainer
					className={classes.container}
					component={Paper}
					sx={{ width: '98%', margin: 'auto', mb: 1, borderRadius: 1 }}>
					<Table sx={{ width: '100%' }} size="small">
						<TableHead>
							{/* Header */}
							<TableRow>
								<TableCell sx={{ fontSize: '1.3rem' }} align="center" colSpan={6}>
									Standings
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell align="center">#</TableCell>
								<TableCell align="center">{''}</TableCell>
								<TableCell align="center">{''}</TableCell>
								<TableCell align="center">PTS</TableCell>
								<TableCell align="center">P</TableCell>
								<TableCell align="center">GD</TableCell>
							</TableRow>
						</TableHead>
						{/* Standings */}
						<TableBody>
							<FullTable league={league} />
						</TableBody>
					</Table>
				</TableContainer>
			</motion.div>
		</AnimatePresence>
	);
};

export default LeftBar;
