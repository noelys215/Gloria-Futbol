import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	container: {
		[theme.breakpoints.between(1200, 1350)]: {
			width: 'auto',
		},
	},
	text: {
		fontWeight: 500,
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		},
	},
}));

export { useStyles };
