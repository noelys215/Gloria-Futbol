import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	container: {
		height: '150px',
		width: '100%',
		overflow: 'hidden',
		[theme.breakpoints.down('xs')]: {
			width: '98vw',
			margin: 'auto',
		},
		[theme.breakpoints.between(1200, 1400)]: {
			width: '90%',
		},
	},
	paper: {
		width: '100%',
		[theme.breakpoints.down('sm')]: {},
	},
	item: {
		display: 'flex',
		fontFamily: 'sans-serif',
		fontWeight: 300,
		fontSize: '1.60rem',
		textAlign: 'center',
		paddingRight: theme.spacing(2),
		cursor: 'pointer',
		[theme.breakpoints.down('sm')]: {
			paddingRight: theme.spacing(0),
			fontSize: '1.2rem',
		},
	},
	teamText: {
		fontSize: '1.45rem',
		[theme.breakpoints.down('sm')]: {
			fontSize: '1.2rem',
		},
	},
}));

export { useStyles };
