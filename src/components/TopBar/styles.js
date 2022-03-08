import { makeStyles } from '@material-ui/core/styles';

const color = 'inherit';

const useStyles = makeStyles((theme) => ({
	title: {
		fontFamily: 'Genos !important',
		fontStyle: 'italic',
	},
	select: {
		'&:before': {
			borderColor: 'transparent',
		},
		'&:after': {
			borderColor: 'transparent',
		},
		// [theme.breakpoints.between(600, 680)]: {
		// 	width: '150px !important',
		// },
		// [theme.breakpoints.down('md')]: {
		// 	width: '150px !important',
		// },
		[theme.breakpoints.down('xs')]: {
			width: '150',
		},
		[theme.breakpoints.down(375)]: {
			width: '150px',
		},
	},
	icon: {
		fill: color,
	},
	inputLabel: {
		color: '#222',
		'&.Mui-focused': {
			color: '#222',
		},
	},
	calendar: {
		[theme.breakpoints.down('xs')]: {
			maxWidth: '110%',
		},
		[theme.breakpoints.between(600, 680)]: {
			width: '150px',
		},
	},
	form: {
		[theme.breakpoints.down('xs')]: {
			marginLeft: 0,
			width: 'auto',
		},
	},
}));

export { useStyles };
