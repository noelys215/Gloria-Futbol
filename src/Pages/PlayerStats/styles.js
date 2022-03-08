import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	grid: {
		margin: 'auto',
		[theme.breakpoints.down('sm')]: {
			width: '99%',
		},
	},
	container: {
		marginLeft: 'auto',
		width: '150%',
		[theme.breakpoints.down('sm')]: {
			margin: 'auto',
			width: '100%',
		},
		[theme.breakpoints.between(550, 900)]: {
			width: '70%',
		},
		[theme.breakpoints.between(960, 1200)]: {
			width: '100%',
		},
	},
}));

export { useStyles };
