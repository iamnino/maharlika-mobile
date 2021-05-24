import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import PropTypes from 'prop-types';

// Color
import colors from '../../constants/colors';

const propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    viewBox: PropTypes.string,
    preserveAspectRatio: PropTypes.string,
    color: PropTypes.string,
	title: PropTypes.string,
	active: PropTypes.bool
};

const defaultProps = {
	width: 26,
	height: 26,
	viewBox: '0 0 29 29',
	preserveAspectRatio: '',
	color: '#666666',
	title: '',
	active: false
};

const ChatIcon = (props: any) => {
	const { light } = colors;

	return (
		<Svg width={props.width} height={props.height} viewBox={props.viewBox} {...props}>
			<G stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(3.000000, 2.000000)">
				<Path fill={props.active ? light.tabIconSelected: light.tabIconDefault} fill-rule="nonzero" d="M12.0169044,0 C5.39882336,0 0.0338086353,5.37234383 0.0338086353,11.9994658 C0.0233328077,14.7703037 0.981422505,17.4574686 2.74198828,19.5951277 L0.345369125,21.9950208 C0.00535529907,22.3400783 -0.0939272473,22.856106 0.0937241142,23.3029626 C0.297278927,23.7445281 0.746870196,24.0193904 1.23211821,23.9989316 L12.0169044,23.9989316 C18.6349854,23.9989315 24,18.6265877 24,11.9994658 C24,5.3723439 18.6349854,0 12.0169044,0 Z M12.0169044,21.5990384 L4.12004429,21.5990384 L5.2344722,20.4830881 C5.6990851,20.015064 5.6990851,19.2591876 5.2344722,18.7911634 C1.99889653,15.5547673 1.49680585,10.4804056 4.03523642,6.67112934 C6.573667,2.86185312 11.4456984,1.37849719 15.6720075,3.12815681 C19.8983166,4.87781642 22.3019304,9.37323373 21.4130016,13.8653911 C20.5240729,18.3575484 16.5901568,21.5954374 12.0169044,21.5990384 L12.0169044,21.5990384 Z"></Path>
			</G>
		</Svg>
	)
};

ChatIcon.propTypes = propTypes;
ChatIcon.defaultProps = defaultProps;

export default React.memo(ChatIcon);