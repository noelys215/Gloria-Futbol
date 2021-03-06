import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	container: {
		width: 'auto',
		[theme.breakpoints.down('sm')]: {
			width: 'auto',
			margin: 'auto',
			marginBottom: theme.spacing(1),
		},
		[theme.breakpoints.down('xs')]: {
			width: 'auto',
			margin: 'auto',
			marginBottom: theme.spacing(1),
		},
		[theme.breakpoints.between(1200, 1400)]: {
			margin: 'auto',
			marginBottom: theme.spacing(1),
			width: '98%',
		},
	},

	item: {
		width: 'auto',
		display: 'flex',
		fontSize: '1.60rem',
		textAlign: 'center',
		paddingLeft: theme.spacing(3),
		paddingRight: theme.spacing(3),
		[theme.breakpoints.down('sm')]: {
			fontSize: '1.3rem',
		},
		[theme.breakpoints.down('xs')]: {
			padding: 0,
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
