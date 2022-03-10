import { LocalizationProvider, MobileDatePicker } from '@mui/lab';
import { DesktopDatePicker } from '@mui/lab';
import { TextField, useMediaQuery, useTheme } from '@mui/material';
import DateAdapter from '@mui/lab/AdapterDateFns';
import { parseISO } from 'date-fns';
// import DateFnsUtils from '@date-io/date-fns';
import { useStyles } from './styles';

const Calender = ({ selectedDate, handleDateChange }) => {
	const theme = useTheme();
	const classes = useStyles();

	return (
		<div>
			{useMediaQuery(theme.breakpoints.up('sm')) ? (
				<LocalizationProvider dateAdapter={DateAdapter}>
					<DesktopDatePicker
						minDate={parseISO('2021-08-13')}
						maxDate={parseISO('2022-05-23')}
						inputFormat="MM/dd/yyyy"
						value={parseISO(selectedDate)}
						onChange={handleDateChange}
						renderInput={(params) => (
							<TextField
								sx={{ input: { color: '#222', sx: { display: 'none' } } }}
								{...params}
							/>
						)}
					/>
				</LocalizationProvider>
			) : (
				<LocalizationProvider dateAdapter={DateAdapter}>
					<MobileDatePicker
						minDate={parseISO('2021-08-13')}
						maxDate={parseISO('2022-05-23')}
						showToolbar={false}
						inputFormat="MM/dd/yyyy"
						value={parseISO(selectedDate)}
						onChange={handleDateChange}
						renderInput={(params) => (
							<TextField
								className={classes.calendar}
								sx={{ input: { color: '#222', sx: { display: 'none' } } }}
								{...params}
							/>
						)}
					/>
				</LocalizationProvider>
			)}
		</div>
	);
};

export default Calender;
