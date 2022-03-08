import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	item: {
		[theme.breakpoints.between(1200, 1400)]: {
			margin: 'auto',
			marginBottom: theme.spacing(1),
			width: '98%',
		},
	},
}));

export { useStyles };
