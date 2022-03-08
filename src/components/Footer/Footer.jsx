import { AppBar, Typography } from '@mui/material';

const Footer = () => {
	return (
		<AppBar
			enableColorOnDark
			sx={{
				backgroundColor: '#ce2200',
				width: '100%',
				minHeight: 50,
				mt: 'auto',
				borderRadius: 1,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				position: 'static',
			}}>
			<Typography sx={{ color: '#222' }}>
				&copy; {new Date().getFullYear()} Gloria, All Rights Reserved.
			</Typography>
		</AppBar>
	);
};

export default Footer;
