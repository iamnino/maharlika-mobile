import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import PropTypes from 'prop-types';

const propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    viewBox: PropTypes.string,
    preserveAspectRatio: PropTypes.string,
	color: PropTypes.string,
	style: PropTypes.any,
	active: PropTypes.bool
};

const defaultProps = {
	width: 29,
	height: 29,
	viewBox: '0 0 29 29',
	preserveAspectRatio: '',
	color: '#242526',
	style: {},
	active: false
};

const HeartIcon = (props: any) => {
	return (
		<Svg width={props.width} height={props.height} viewBox={props.viewBox} style={props.style}>
			<G stroke="none" fill="none" fill-rule="evenodd" 
				transform="translate(3.00000, 4.000000)">
                <Path fill={props.active ? '#FF2D55': 'none'} d="M20.99525,11.1 L12.15525,19.94 C11.96825,20.127 11.71425,20.233 11.44825,20.233 C11.18325,20.233 10.92925,20.127 10.74125,19.94 L1.90125,11.1 C-0.63375,8.565 -0.63375,4.441 1.90125,1.906 C4.43625,-0.63 8.56125,-0.629 11.09625,1.906 L11.44825,2.258 L11.80225,1.906 C13.02825,0.677 14.66125,8.70414851e-14 16.39825,8.70414851e-14 C18.13625,8.70414851e-14 19.76725,0.677 20.99525,1.906 C22.22425,3.133 22.90025,4.765 22.90025,6.502 C22.90025,8.239 22.22425,9.871 20.99525,11.1"></Path>
				<Path fill={props.active ? '#FF2D55': props.color} d="M6.498,2.0024 C5.346,2.0024 4.193,2.4414 3.315,3.3184 C1.561,5.0744 1.561,7.9294 3.315,9.6854 L11.448,17.8184 L19.581,9.6854 C20.432,8.8344 20.9,7.7044 20.9,6.5024 C20.9,5.2994 20.432,4.1694 19.581,3.3184 C18.73,2.4684 17.601,2.0004 16.398,2.0004 C15.196,2.0004 14.065,2.4684 13.215,3.3184 L12.155,4.3784 C11.78,4.7534 11.116,4.7534 10.741,4.3784 L9.681,3.3184 C8.804,2.4414 7.651,2.0024 6.498,2.0024 M11.448,20.2324 C11.183,20.2324 10.929,20.1274 10.741,19.9394 L1.901,11.0994 C-0.634,8.5644 -0.634,4.4394 1.901,1.9044 C4.436,-0.6306 8.561,-0.6306 11.095,1.9044 L11.448,2.2574 L11.801,1.9044 C13.029,0.6764 14.662,0.0004 16.398,0.0004 C18.135,0.0004 19.768,0.6764 20.995,1.9044 C22.224,3.1324 22.9,4.7654 22.9,6.5024 C22.9,8.2384 22.224,9.8714 20.995,11.0994 L12.155,19.9394 C11.968,20.1274 11.713,20.2324 11.448,20.2324"></Path>
			</G>
		</Svg>
	)
};

HeartIcon.propTypes = propTypes;
HeartIcon.defaultProps = defaultProps;

export default React.memo(HeartIcon);