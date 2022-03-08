import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Outlet, useNavigate } from 'react-router-dom';
import { Card } from '@mui/material';
import SingleFixture from '../SingleFixture/SingleFixture';
import { useStyles } from './styles';

export default function DetailsTabbed({ fixtureId }) {
	const navigate = useNavigate();
	const classes = useStyles();

	// Gets Fixture Info
	React.useEffect(() => {
		localStorage.setItem('fixture', JSON.stringify(fixtureId));
	}, [fixtureId]);

	// Handles Tabs
	const handleChange = (event, newValue) => {
		setSelectedTab(newValue);
	};

	const [selectedTab, setSelectedTab] = React.useState(0);
	React.useEffect(() => {
		let path = window.location.pathname;
		if (path === '/details/lineups') setSelectedTab(0);
		else if (path === '/details/facts') setSelectedTab(1);
		else if (path === '/details/events') setSelectedTab(2);
	}, [selectedTab]);

	return (
		<>
			<SingleFixture fixtureId={fixtureId} />
			<Card
				className={classes.item}
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					width: 'auto',
					margin: 'auto',
				}}>
				<Tabs value={selectedTab} onChange={handleChange} centered>
					<Tab value={0} label="Lineups" onClick={() => navigate('/details/lineups')} />
					<Tab value={1} label="Match Facts" onClick={() => navigate('/details/facts')} />
					<Tab value={2} label="Events" onClick={() => navigate('/details/events')} />
				</Tabs>
			</Card>
			<Outlet />
		</>
	);
}
