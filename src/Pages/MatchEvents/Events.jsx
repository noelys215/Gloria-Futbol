import { CircularProgress, Container, Typography } from '@mui/material';
import { useStyles } from './styles';
import { useGetEventsQuery } from '../../services/footballApi';

import React from 'react';
import {
	Timeline,
	TimelineConnector,
	TimelineContent,
	TimelineDot,
	TimelineItem,
	TimelineOppositeContent,
	TimelineSeparator,
} from '@mui/lab';
import ErrorPage from '../../Pages/ErrorPage/ErrorPage';

const Events = ({ fixtureId, isDarkTheme }) => {
	const classes = useStyles();

	const { data, isFetching } = useGetEventsQuery(fixtureId);
	const event = data?.response;

	if (isFetching) {
		return (
			<Container
				className={classes.container}
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					marginTop: '50%',
				}}>
				<CircularProgress />
			</Container>
		);
	}

	return event.length === 0 ? (
		<ErrorPage isDarkTheme={isDarkTheme} />
	) : (
		React.Children.toArray(
			event.map((arr, i) => (
				<>
					<Timeline position="alternate">
						<TimelineItem>
							<TimelineOppositeContent
								sx={{ m: 'auto 0' }}
								align="right"
								variant="body1">
								{arr?.team?.name}
							</TimelineOppositeContent>
							<TimelineSeparator>
								<TimelineConnector />
								<TimelineDot
									sx={{
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										width: '2.4rem',
										height: '2.4rem',
										color: '#333',
										backgroundColor:
											arr?.detail === 'Yellow Card'
												? '#ffdc12'
												: arr?.detail === 'Red Card'
												? '#ee352a'
												: 'white',
										border: 'solid 1px black',
									}}>
									{arr?.time?.elapsed}'
								</TimelineDot>
								<TimelineConnector />
							</TimelineSeparator>

							<TimelineContent sx={{ py: '12px', px: 2 }}>
								<Typography variant="h7" component="span">
									{arr?.player?.name}
								</Typography>
								<Typography
									sx={{
										fontWeight: arr?.detail === 'Normal Goal' ? 'bold' : '',
										fontStyle: arr?.detail === 'Normal Goal' ? 'italic' : '',
									}}>
									{arr?.detail === 'Normal Goal' ? 'GOAL!!!' : arr?.detail}
								</Typography>
							</TimelineContent>
						</TimelineItem>
					</Timeline>
				</>
			))
		)
	);
};

export default Events;
