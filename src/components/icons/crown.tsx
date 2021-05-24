import * as React from "react";
import Svg, { G, Path, Circle } from "react-native-svg";
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
	width: 24,
	height: 24,
	viewBox: '0 0 24 24',
	preserveAspectRatio: '',
	color: '#242526',
	style: {}
};

const CrownIcon = (props: any) => {
	return (
		<Svg width={props.width} height={props.height} viewBox={props.viewBox} style={props.style}>
			<G stroke="none" stroke-width="1" transform="translate(3.000000, 3.500000)" fill="none" fill-rule="evenodd">
                <Path fill="#8FC4FD" fill-rule="nonzero" d="M1.827243,11.918421 L0.027243,4.718412 C-0.058353568,4.37577591 0.0643285155,4.0147406 0.340959131,3.7951916 C0.617589746,3.5756426 0.99705203,3.53814902 1.3113,3.699315 L4.777704,5.480415 L8.25732,0.391995 C8.43391928,0.16021206 8.7086057,0.024168258 9,0.024168258 C9.2913943,0.024168258 9.56608072,0.16021206 9.74268,0.391995 L13.222269,5.480424 L16.688673,3.699324 C17.002923,3.53814164 17.3823975,3.57562706 17.6590376,3.79517898 C17.9356777,4.01473091 18.058362,4.37577748 17.972757,4.718421 L16.172757,11.918421 L1.827243,11.918421 Z"></Path>
                <Path fill="#007AFF" fill-rule="nonzero" d="M16.172757,11.918412 L1.827243,11.918412 L1.79999997,11.809422 L1.79999997,15.3 C1.79999997,15.5387139 1.89473913,15.7676685 2.06353533,15.9364647 C2.23233153,16.1052609 2.46128613,16.2000621 2.7,16.2 L15.3,16.2 C15.5387139,16.2000621 15.7676685,16.1052609 15.9364647,15.9364647 C16.1052609,15.7676685 16.2,15.5387139 16.2,15.3 L16.2,11.809422 L16.172757,11.918412 Z"></Path>
                <Circle fill="#007AFF" fill-rule="nonzero" cx="9.18" cy="8.28" r="1.08"></Circle>
            </G>
		</Svg>
	)
};

CrownIcon.propTypes = propTypes;
CrownIcon.defaultProps = defaultProps;

export default React.memo(CrownIcon);