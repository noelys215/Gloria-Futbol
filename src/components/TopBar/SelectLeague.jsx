import { Grid, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useEffect } from 'react';
import { useStyles } from './styles';

const SelectLeague = ({ handleLeagueChange, league }) => {
	const classes = useStyles();

	useEffect(() => {
		localStorage.setItem('league', JSON.stringify(league));
	}, [league]);

	return (
		<Grid item>
			<FormControl
				className={classes.form}
				variant="filled"
				sx={{
					mr: 1,
					minWidth: { xl: 200, lg: 200, md: 200, xs: 150, sm: 150 },
					borderRadius: 1,
				}}>
				<InputLabel className={classes.inputLabel} id="select">
					League
				</InputLabel>
				<Select
					sx={{ color: '#222' }}
					className={classes.select}
					inputProps={{
						classes: {
							icon: classes.icon,
							root: classes.root,
						},
					}}
					labelId="league label"
					id="selectLeague"
					value={league}
					onChange={handleLeagueChange}>
					<MenuItem value={39}>Premier League</MenuItem>
					<MenuItem value={40}>Championship</MenuItem>
					<MenuItem value={140}>La Liga</MenuItem>
					<MenuItem value={78}>Bundesliga</MenuItem>
					<MenuItem value={135}>Serie A</MenuItem>
					<MenuItem value={61}>Ligue 1</MenuItem>
					<MenuItem value={94}>Primeira Liga</MenuItem>
					<MenuItem value={88}>Eredivisie</MenuItem>
					<MenuItem value={71}>Brazil Série A</MenuItem>
					<MenuItem value={262}>Liga MX</MenuItem>
				</Select>
			</FormControl>
		</Grid>
	);
};

export default SelectLeague;
