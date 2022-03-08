import { Paper, Typography } from '@mui/material';
import { useStyles } from './styles';

const ErrorPage = () => {
	const classes = useStyles();
	return (
		<Paper
			className={classes.container}
			elevation={2}
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				textAlign: 'center',
				borderRadius: 2,
				height: '129px',
				width: 'auto',
			}}>
			<Typography variant="h5">No games today, try a different date.</Typography>
		</Paper>
	);
};

export default ErrorPage;
