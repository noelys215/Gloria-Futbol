import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	box: {
		maxWidth: '100%',
		marginTop: theme.spacing(1),
		borderRadius: 9,
		fontFamily: 'Roboto',
		fontSize: '1.1rem',
		marginBottom: theme.spacing(1),
		[theme.breakpoints.down('sm')]: {
			marginTop: theme.spacing(1),
			width: '98vw',
			marginBottom: theme.spacing(1),
		},
		[theme.breakpoints.between(1200, 1400)]: {
			margin: 'auto',
			width: '98%',
		},
	},
	text: {
		fontSize: '1em',
		[theme.breakpoints.down('sm')]: {
			fontSize: '0.875rem',
		},
	},
	teamName: {
		display: 'flex',
		alignItems: 'center',
		width: '100%',
		justifyContent: 'space-evenly',
		fontSize: '2em',
		[theme.breakpoints.down('sm')]: {
			fontSize: '1.6rem',
		},
		[theme.breakpoints.down('xs')]: {
			fontSize: '1.4rem',
		},
	},
	teamBadge: {
		height: '4rem',
		width: '4rem',
		[theme.breakpoints.down('sm')]: {
			width: '3.5rem',
			height: '3.5rem',
		},
		[theme.breakpoints.down('xs')]: {
			width: '2.1rem',
			height: '2.1rem',
		},
	},
	lineups: {
		[theme.breakpoints.down('sm')]: {
			margin: 'auto',
		},
	},
}));

export { useStyles };
