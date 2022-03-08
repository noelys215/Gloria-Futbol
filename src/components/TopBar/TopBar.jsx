import { Box, Typography, Grid, Toolbar, AppBar, IconButton, Avatar } from '@mui/material';
import Calender from './Calender';
import SelectLeague from './SelectLeague';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { SunIcon } from '../../Themes/SunIcon';
import { MoonIcon } from '../../Themes/MoonIcon';
import { useStyles } from './styles';
import logo from '../../assets/Images/gloriaLogo.png';

const TopBar = ({
	handleLeagueChange,
	league,
	selectedDate,
	handleDateChange,
	setSelectedDate,
	changeTheme,
	isDarkTheme,
}) => {
	const classes = useStyles();

	useEffect(() => {
		localStorage.setItem('theme', JSON.stringify(isDarkTheme));
	}, [isDarkTheme]);

	return (
		<AppBar position="static" enableColorOnDark sx={{ borderRadius: 1, mb: 2 }}>
			<Toolbar>
				<Grid
					container
					justifyContent="space-evenly"
					alignItems="center"
					sx={{ minHeight: 70 }}>
					{/* Logo */}
					<Grid
						item
						xs={4}
						sm={3.5}
						md={3}
						xl={1}
						order={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1 }}>
						<Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
							<Typography
								variant="h3"
								noWrap
								className={classes.title}
								sx={{ display: 'flex', margin: 'auto', width: '200%' }}>
								Gloria
								<Avatar
									src={logo}
									alt="logo"
									sx={{
										height: '4rem',
										width: 'auto',
										filter: 'invert(90%)',
									}}
								/>
							</Typography>
						</Link>
					</Grid>

					{/* League Select */}
					<Grid
						item
						sx={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'center',
							alignItems: 'center',
						}}
						order={{ xs: 3, sm: 3, md: 2, lg: 2, xl: 2 }}
						xs={12}
						sm={7.5}
						md={7}>
						<SelectLeague league={league} handleLeagueChange={handleLeagueChange} />
						{/* Date Picker */}
						<Calender
							selectedDate={selectedDate}
							setSelectedDate={setSelectedDate}
							handleDateChange={handleDateChange}
						/>
					</Grid>

					{/* Mode Toggle */}
					<Grid item xs={5} sm={1} md={1} order={{ xs: 2, sm: 3 }}>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'flex-end',
							}}>
							<IconButton
								sx={{}}
								onClick={changeTheme}
								color="inherit"
								aria-label="theme toggle">
								{!isDarkTheme ? <SunIcon /> : <MoonIcon />}
							</IconButton>
						</Box>
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>
	);
};

export default TopBar;
