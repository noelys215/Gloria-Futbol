import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	container: {
		[theme.breakpoints.between(0, 920)]: {
			margin: 'auto',
			width: '98%',
		},
		[theme.breakpoints.down('sm')]: {
			justifyContent: 'center',
			width: '98vw',
		},
		[theme.breakpoints.between(1200, 1350)]: {
			margin: 'auto',
			width: '90%',
		},
	},
}));

export { useStyles };
