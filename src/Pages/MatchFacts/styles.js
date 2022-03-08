import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	box: {
		maxWidth: '100%',
		marginTop: theme.spacing(1),
		borderRadius: 9,
	},
	container: {
		width: '100%',
	},
	listItem: {
		[theme.breakpoints.down(325)]: {
			padding: 0,
		},
	},
}));

export { useStyles };
