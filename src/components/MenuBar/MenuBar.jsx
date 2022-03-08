import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Outlet, useNavigate } from 'react-router-dom';
import { Card } from '@mui/material';

import { useEffect } from 'react';

export default function MenuBar() {
	const navigate = useNavigate();

	// Handles Tabs
	const handleChange = (event, newValue) => {
		setSelectedTab(newValue);
	};

	const [selectedTab, setSelectedTab] = React.useState(0);
	useEffect(() => {
		let path = window.location.pathname;
		if (path === '/') setSelectedTab(0);
		else if (path === '/leaguetable') setSelectedTab(1);
		else if (path === '/playerstats') setSelectedTab(2);
	}, [selectedTab]);

	return (
		<>
			<Card
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					width: '100%',
					mb: 1,
				}}>
				<Tabs value={selectedTab} onChange={handleChange} centered>
					<Tab value={0} label="Matches" onClick={() => navigate('/')} />
					<Tab value={1} label="Table" onClick={() => navigate('/leaguetable')} />
					<Tab value={2} label="Stats" onClick={() => navigate('/playerstats')} />
				</Tabs>
			</Card>
			<Outlet />
		</>
	);
}
