import { useState } from 'react';
import { format } from 'date-fns';
import { AnimatePresence } from 'framer-motion';
import { useNavigate, Route, Routes } from 'react-router-dom';
import { lightTheme, darkTheme, StyledContainer } from './Themes/Themes';
import { Grid, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import * as COMP from './imports';

const App = () => {
	// Change Theme
	const changeTheme = () => {
		localStorage.setItem('theme', JSON.stringify(isDarkTheme));
		setIsDarkTheme(!isDarkTheme);
	};
	const getThemeFromStorage = JSON.parse(localStorage.getItem('theme'));
	const [isDarkTheme, setIsDarkTheme] = useState(getThemeFromStorage);

	// Football States
	let navigate = useNavigate();
	const fixtureFromStorage = JSON.parse(localStorage.getItem('fixture'));
	const leagueFromStorage = JSON.parse(localStorage.getItem('league'));

	const [league, setLeague] = useState(leagueFromStorage === null ? 39 : leagueFromStorage);
	const [fixtureId, setFixtureId] = useState(fixtureFromStorage);
	const [selectedDate, setSelectedDate] = useState(format(new Date(), 'yyyy-MM-dd'));

	const handleLeagueChange = (e) => {
		setLeague(e.target.value);
		localStorage.setItem('league', JSON.stringify(league));
		navigate('/');
	};

	const handleDateChange = (newDate) => {
		setSelectedDate(format(new Date(newDate), 'yyyy-MM-dd'));
		navigate('/');
	};

	return (
		<ThemeProvider theme={isDarkTheme ? createTheme(darkTheme) : createTheme(lightTheme)}>
			<StyledContainer>
				<CssBaseline />
				<COMP.TopBar
					handleLeagueChange={handleLeagueChange}
					league={league}
					selectedDate={selectedDate}
					handleDateChange={handleDateChange}
					setSelectedDate={setSelectedDate}
					changeTheme={changeTheme}
					isDarkTheme={isDarkTheme}
				/>
				<COMP.MenuBar league={league} fixtureId={fixtureId} />
				<Grid container>
					<Grid item sm={12} md={6} lg={3} order={{ xs: 2, sm: 2, md: 2, lg: 1, xl: 1 }}>
						{window.innerWidth > 1199 ? (
							<COMP.LeftBar league={league} selectedDate={selectedDate} />
						) : (
							''
						)}
					</Grid>
					<Grid
						item
						xs={12}
						sm={12}
						md={12}
						lg={6}
						order={{ xs: 1, sm: 1, md: 1, lg: 2, xl: 2 }}>
						{/*  */}
						<AnimatePresence exitBeforeEnter>
							<Routes>
								<Route
									path="/"
									element={
										<COMP.Fixtures
											league={league}
											selectedDate={selectedDate}
											setFixtureId={setFixtureId}
											fixtureId={fixtureId}
										/>
									}
								/>
								<Route
									path="/details"
									element={
										<COMP.DetailsTabbed
											fixtureId={fixtureId}
											league={league}
											isDarkTheme={isDarkTheme}
										/>
									}>
									<Route
										path="/details/facts"
										element={
											<COMP.MatchFacts
												league={league}
												fixtureId={fixtureId}
												isDarkTheme={isDarkTheme}
											/>
										}
									/>
									<Route
										path="/details/lineups"
										element={
											<COMP.LineUps
												league={league}
												fixtureId={fixtureId}
												isDarkTheme={isDarkTheme}
											/>
										}
									/>
									<Route
										path="/details/events"
										element={
											<COMP.MatchEvents
												league={league}
												fixtureId={fixtureId}
												isDarkTheme={isDarkTheme}
											/>
										}
									/>
								</Route>
								<Route
									path="/leaguetable"
									element={<COMP.StandingsFull league={league} />}
								/>
								<Route
									path="/playerstats"
									element={<COMP.PlayerStats league={league} />}
								/>
								<Route
									path="*"
									element={<COMP.ErrorPage isDarkTheme={isDarkTheme} />}
								/>
							</Routes>
						</AnimatePresence>
						{/*  */}
					</Grid>
					<Grid
						item
						xs={12}
						sm={12}
						md={6}
						lg={3}
						order={{ xs: 3, sm: 1, md: 2, lg: 3, xl: 3 }}>
						{window.innerWidth > 1199 ? (
							window.location.pathname === '/playerstats' ? null : (
								<COMP.RightBar league={league} selectedDate={selectedDate} />
							)
						) : (
							''
						)}
					</Grid>
				</Grid>
				<COMP.Footer />
			</StyledContainer>
		</ThemeProvider>
	);
};

export default App;
