import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import PropTypes from 'prop-types';

const propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    viewBox: PropTypes.string,
    preserveAspectRatio: PropTypes.string,
    color: PropTypes.string,
	style: PropTypes.any
};

const defaultProps = {
	width: 29,
	height: 29,
	viewBox: '0 0 29 29',
	preserveAspectRatio: '',
	color: '#3A3A3A',
	style: {}
};

const TagIcon = (props: any) => {
	return (
		<Svg width={props.width} height={props.height} viewBox={props.viewBox} style={props.style}>
			<G stroke="none" stroke-width="1" fill-rule="evenodd" transform="translate(0.000000, 0.000000)">
                <Path fill={props.color} fill-rule="nonzero" d="M10.275,8.2 C9.40515152,8.2 8.7,8.90515152 8.7,9.775 C8.7,10.6448485 9.40515152,11.35 10.275,11.35 C11.1448485,11.35 11.85,10.6448485 11.85,9.775 C11.85,8.90515152 11.1448485,8.2 10.275,8.2 Z M24.576,13.1455 L15.7455,4.3045 C15.5473452,4.10795416 15.2790931,3.9983864 15,3.99998243 L5.55,3.99998243 C4.97010101,3.99998243 4.49998243,4.47010101 4.49998243,5.05 L4.49998243,14.5 C4.4983864,14.7790931 4.60795416,15.0473452 4.8045,15.2455 L13.6455,24.076 C14.8753337,25.3043042 16.8676663,25.3043042 18.0975,24.076 L24.576,17.65 C25.8043042,16.4201663 25.8043042,14.4278337 24.576,13.198 L24.576,13.1455 Z M23.0955,16.1065 L23.0955,16.1065 L16.6065,22.585 C16.1969607,22.9921098 15.5355393,22.9921098 15.126,22.585 L6.6,14.0695 L6.6,6.1 L14.5695,6.1 L23.0955,14.626 C23.2920458,14.8241548 23.4016136,15.0924069 23.4000176,15.3715 C23.3988401,15.6469569 23.2894814,15.9109263 23.0955,16.1065 L23.0955,16.1065 Z"></Path>
			</G>
		</Svg>
	)
};

TagIcon.propTypes = propTypes;
TagIcon.defaultProps = defaultProps;

export default React.memo(TagIcon);