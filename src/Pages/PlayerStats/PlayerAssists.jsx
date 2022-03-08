import { Skeleton, TableCell, TableRow } from '@mui/material';
import { useGetMostAssistsQuery } from '../../services/footballApi';

const PlayerAssists = ({ league }) => {
	const { data, isFetching } = useGetMostAssistsQuery(league);
	const player = data?.response.slice(0, 10);
	const n = 10;

	if (isFetching)
		return (
			<TableRow>
				<TableCell>
					{[...Array(n)].map((e, i) => (
						<span key={i}>
							<Skeleton
								variant="text"
								sx={{ marginTop: '1rem', marginBottom: '1.1rem' }}
							/>
						</span>
					))}
				</TableCell>
			</TableRow>
		);

	return player.map((arr, i) => (
		<TableRow key={arr?.player?.id}>
			{/* Rank */}
			<TableCell sx={{ fontSize: '1.1rem' }}>#{i + 1}</TableCell>
			{/* Player */}
			<TableCell sx={{ fontSize: '1.1rem' }}>{arr?.player?.name}</TableCell>
			{/* Goals */}
			<TableCell sx={{ fontSize: '1.1rem' }} align="right">
				{arr?.statistics[0]?.goals?.assists}
			</TableCell>
		</TableRow>
	));
};

export default PlayerAssists;
