import { Card } from '@mui/material';
import Events from './Events';
import { motion } from 'framer-motion';
import { pageAnimation } from '../../Utils/Motions/BoxMotion';

const MatchEvents = ({ fixtureId, isDarkTheme }) => {
	return (
		<>
			<motion.div {...pageAnimation}>
				<Card sx={{ mt: 1, mb: 1, borderRadius: 1 }}>
					<Events fixtureId={fixtureId} isDarkTheme={isDarkTheme} />
				</Card>
			</motion.div>
		</>
	);
};

export default MatchEvents;
