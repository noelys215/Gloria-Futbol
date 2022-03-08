import { createTheme } from '@mui/material';
import { styled } from '@mui/system';

export const lightTheme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#ce2200',
		},
		text: {
			primary: '#222',
		},
		background: {
			default: '#FFF9F7',
		},
	},
});

export const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#ce2200',
		},
		text: {
			primary: '#999',
		},
	},
});

export const StyledContainer = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	// justifyContent: 'center',
	alignItems: 'center',
	margin: 'auto',
	minHeight: '100vh',
	// marginBottom: theme.spacing(2),
	[theme.breakpoints.up('lg')]: {
		width: '75%',
	},
	[theme.breakpoints.between(920, 1200)]: {
		width: '78% ',
	},
	[theme.breakpoints.between('lg', 1750)]: {
		width: '90% ',
	},
	[theme.breakpoints.down(920)]: {
		width: '98%',
	},
	[theme.breakpoints.between(1200, 1450)]: {
		width: '99%',
	},
	[theme.breakpoints.up(2300)]: {
		width: '60%',
	},
	[theme.breakpoints.up(2400)]: {
		width: '55%',
	},
	[theme.breakpoints.up(3100)]: {
		width: '45%',
	},
}));
