import { Card } from '@mui/material';
import errorImg from '../../assets/Images/error.gif';
import { useStyles } from './styles';

const ErrorPage = ({ isDarkTheme }) => {
	const classes = useStyles();
	return (
		<Card
			className={classes.container}
			elevation={0}
			sx={{
				width: '100%',
			}}>
			<img
				style={{ filter: isDarkTheme ? 'invert(87%)' : '' }}
				width={'100%'}
				height={'100%'}
				src={errorImg}
				alt="404 Error"
			/>
		</Card>
	);
};

export default ErrorPage;
