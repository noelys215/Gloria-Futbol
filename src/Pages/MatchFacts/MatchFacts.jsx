import { Card } from '@mui/material';
import { useStyles } from './styles';
import { Statistics } from './Statistics';
import { motion } from 'framer-motion';
import { pageAnimation } from '../../Utils/Motions/BoxMotion';

const MatchFacts = ({ fixtureId, isDarkTheme }) => {
	const classes = useStyles();

	return (
		<>
			<motion.div {...pageAnimation}>
				<Card className={classes.box}>
					<Statistics fixtureId={fixtureId} isDarkTheme={isDarkTheme} />
				</Card>
			</motion.div>
		</>
	);
};

export default MatchFacts;
