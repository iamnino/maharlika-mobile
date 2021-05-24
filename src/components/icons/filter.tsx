import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import PropTypes from 'prop-types';

const propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    viewBox: PropTypes.string,
    preserveAspectRatio: PropTypes.string,
    color: PropTypes.string,
	title: PropTypes.string,
	active: PropTypes.bool,
	style: PropTypes.any
};

const defaultProps = {
	width: 29,
	height: 29,
	viewBox: '0 0 29 29',
	preserveAspectRatio: '',
	color: '#242526',
	title: '',
	active: false,
	style: {}
};

const FilterIcon = (props: any) => {
	return (
		<Svg width={props.width} height={props.height} viewBox={props.viewBox} style={props.style}>
			<G stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(2.500000, 3.000000)">
				<Path fill={props.color} d="M10.6413651,16.9522222 L12.8924762,18.6555556 L12.8924762,13.5966667 C12.8924762,13.4122222 12.9391429,13.2311111 13.0258095,13.0688889 L17.8035873,4.22222222 L5.93692063,4.22222222 L10.5169206,13.0866667 C10.5991429,13.2444444 10.6413651,13.42 10.6413651,13.5966667 L10.6413651,16.9522222 Z M14.0035873,22 C13.7669206,22 13.530254,21.9244444 13.3335873,21.7744444 L8.86025397,18.3911111 C8.58247619,18.1811111 8.41914286,17.8533333 8.41914286,17.5055556 L8.41914286,13.8677778 L3.12469841,3.62111111 C2.94580952,3.27666667 2.96025397,2.86444444 3.16247619,2.53333333 C3.3635873,2.20222222 3.7235873,2 4.11136508,2 L19.6669206,2 C20.0580317,2 20.420254,2.20555556 20.6213651,2.54222222 C20.8213651,2.87777778 20.830254,3.29444444 20.6446984,3.63888889 L15.1146984,13.8777778 L15.1146984,20.8888889 C15.1146984,21.31 14.8769206,21.6955556 14.4991429,21.8833333 C14.3424762,21.9611111 14.1724762,22 14.0035873,22 L14.0035873,22 Z"></Path>
			</G>
		</Svg>
	)
};

FilterIcon.propTypes = propTypes;
FilterIcon.defaultProps = defaultProps;

export default React.memo(FilterIcon);