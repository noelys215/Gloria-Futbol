import { Card } from '@mui/material';
import { useStyles } from './styles';
import StartingSquads from './StartingSquads';
import { motion } from 'framer-motion';
import { pageAnimation } from '../../Utils/Motions/BoxMotion';

const LineUps = ({ fixtureId, isDarkTheme }) => {
	const classes = useStyles();

	return (
		<>
			<motion.div {...pageAnimation}>
				<Card className={classes.box}>
					<StartingSquads fixtureId={fixtureId} isDarkTheme={isDarkTheme} />
				</Card>
			</motion.div>
		</>
	);
};

export default LineUps;
