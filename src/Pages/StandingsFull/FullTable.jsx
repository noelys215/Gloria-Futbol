import { TableCell, TableRow } from '@mui/material';
import { useGetStandingsQuery } from '../../services/footballApi';
import { Skeleton } from '@mui/material';
import { useStyles } from './styles';

const FullTable = ({ league }) => {
	const { data, isFetching } = useGetStandingsQuery(league);
	const teams = data?.response[0]?.league?.standings[0];
	const classes = useStyles();

	const n = 20;

	return isFetching ? (
		<TableRow>
			<TableCell align="center" colSpan={6}>
				{[...Array(n)].map((e, i) => (
					<span key={i}>
						<Skeleton
							variant="text"
							sx={{
								marginTop: '1rem',
								marginBottom: '1.1rem',
								width: '90vw',
								height: 'auto',
							}}
						/>
					</span>
				))}
			</TableCell>
		</TableRow>
	) : (
		teams.map((arr, i) => (
			<TableRow
				key={arr?.team?.id}
				sx={{
					borderLeft:
						arr?.description?.includes('Champions League') ||
						arr?.description?.includes('Promotion') ||
						arr?.description?.includes('Final Series') || //Liga MX
						arr?.description?.includes('Libertadores') || //Brazil
						arr?.description?.includes('Relegation') ||
						arr?.description?.includes('Europa') ||
						arr?.description?.includes('Sudamericana') || //Brazil
						arr?.description?.includes('Play Offs') ||
						arr?.description?.includes('Play-offs') //Liga MX
							? 'solid 5px'
							: '',
					borderLeftColor: arr?.description?.includes('Champions League')
						? '#0492c2'
						: arr?.description?.includes('Final Series') //Liga MX
						? '#0492c2'
						: arr?.description?.includes('Libertadores') //Brazil
						? '#0492c2'
						: arr?.description?.includes('Relegation')
						? '#ff4040'
						: arr?.description?.includes('Europa')
						? '#F28C28'
						: arr?.description?.includes('Sudamericana') //Brazil
						? '#F28C28'
						: arr?.description?.includes('Play Offs')
						? '#bbe6f4 '
						: arr?.description?.includes('Play-offs')
						? '#bbe6f4 '
						: arr?.description?.includes('Promotion')
						? '#0492c2 '
						: '',
				}}>
				{/* Position */}
				<TableCell style={{ fontSize: '1rem' }} align="center">
					{i + 1}.
				</TableCell>
				{/* Badge/Logo */}
				<TableCell style={{ fontSize: '1rem', paddingLeft: 0 }} align="center">
					{
						<img
							src={arr?.team?.logo}
							alt="team badge"
							style={{ width: '1.4rem', height: '1.4rem' }}></img>
					}
				</TableCell>
				{/* Team Name */}
				<TableCell className={classes.text} sx={{ textAlign: 'left' }} align="left">
					{arr?.team?.name}
				</TableCell>
				<TableCell className={classes.text} align="center">
					{arr?.points}
				</TableCell>
				<TableCell className={classes.text} align="center">
					{arr?.all?.played}
				</TableCell>
				<TableCell className={classes.text} align="center">
					{arr?.goalsDiff}
				</TableCell>
			</TableRow>
		))
	);
};

export default FullTable;
