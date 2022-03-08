import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	container: {
		[theme.breakpoints.between(1200, 1350)]: {
			width: 'auto',
		},
	},
}));

export { useStyles };
