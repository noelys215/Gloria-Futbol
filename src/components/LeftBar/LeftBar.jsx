import {
	TableContainer,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Paper,
} from '@mui/material';
import Standings from './Standings';
import { useStyles } from './styles';

const LeftBar = ({ league }) => {
	const classes = useStyles();
	return (
		<TableContainer
			component={Paper}
			sx={{ width: '320px', borderRadius: 1, mb: window.innerHeight <= 1179 ? 5 : 0 }}
			className={classes.container}>
			<Table sx={{ minWidth: '100%' }} size="small">
				<TableHead>
					{/* Header */}
					<TableRow>
						<TableCell sx={{ fontSize: '1.3rem' }} align="center" colSpan={4}>
							Standings
						</TableCell>
					</TableRow>
				</TableHead>
				{/* Standings */}
				<TableBody>
					<TableRow>
						<TableCell align="center">#</TableCell>
						<TableCell align="center">{''}</TableCell>
						<TableCell align="center">{''}</TableCell>
						<TableCell align="center">PTS</TableCell>
					</TableRow>
					<Standings league={league} />
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default LeftBar;
