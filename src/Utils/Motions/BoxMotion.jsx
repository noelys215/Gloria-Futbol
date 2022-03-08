export const boxAnimation = {
	box: 'box',
	initial: { y: '50%', opacity: 0 },
	animate: { y: 0, opacity: 1, scale: 1 },
	transition: { duration: 0.2, ease: 'easeIn' },
	exit: {
		y: '50%',
		opacity: 0,
		transition: { duration: 0.2 },
	},
};

export const pageAnimation = {
	box: 'box',
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	transition: { duration: 0.3, ease: 'easeInOut' },
	exit: {
		opacity: 0,
		transition: { duration: 0.3 },
	},
};
