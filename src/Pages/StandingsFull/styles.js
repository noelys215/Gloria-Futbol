import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	container: {
		[theme.breakpoints.between(1200, 1350)]: {
			width: '90%',
		},
		[theme.breakpoints.down('xs')]: {
			width: '98vw',
		},
		[theme.breakpoints.down('xs')]: {
			width: '98vw',
		},
	},
	text: {
		fontSize: '1.1rem',
		paddingLeft: 0,
		width: 'auto',
		overflowWrap: 'anywhere',
		[theme.breakpoints.down('sm')]: {
			fontSize: '1rem',
		},
		[theme.breakpoints.down(330)]: {
			padding: 0,
			overflowWrap: 'break-word',
		},
	},
}));

export { useStyles };
