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

const SmileIcon = (props: any) => {
	const { light } = colors;
	return (
		<Svg width={props.width} height={props.height} viewBox={props.viewBox} {...props}>
			<G stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(2.000000, 2.000000)">
				<Path fill={props.active ? light.tabIconSelected: light.tabIconDefault} d="M12.25,5.22248911e-15 C5.48451181,5.22248911e-15 0,5.48451181 0,12.25 C0,19.0154882 5.48451181,24.5 12.25,24.5 C19.0154882,24.5 24.5,19.0154882 24.5,12.25 C24.5,9.001098 23.2093787,5.88526257 20.9120581,3.58794193 C18.6147374,1.29062129 15.498902,5.22248911e-15 12.25,5.22248911e-15 Z"></Path>
				<Path fill={light.white} d="M12.25,22.05 C6.83760945,22.05 2.45,17.6623905 2.45,12.25 C2.45,6.83760945 6.83760945,2.45 12.25,2.45 C17.6623905,2.45 22.05,6.83760945 22.05,12.25 C22.05,14.8491216 21.017503,17.3417899 19.1796465,19.1796465 C17.3417899,21.017503 14.8491216,22.05 12.25,22.05 Z"></Path>
				<Path fill={props.active ? light.tabIconSelected: light.tabIconDefault} d="M9.26982116,12.0796082 C8.74887857,11.6466169 7.9755624,11.7179156 7.54257116,12.2388582 C7.10957991,12.7598008 7.18087857,13.5331169 7.70182116,13.9661082 C10.2837821,16.1215088 14.0378602,16.1215088 16.6198212,13.9661082 C16.9568119,13.686012 17.1187747,13.24741 17.0446996,12.8155193 C16.9706246,12.3836286 16.6717654,12.0240637 16.2606996,11.8722693 C15.8496338,11.7204748 15.3888119,11.799512 15.0518212,12.0796082 C13.3645387,13.4399876 10.9571036,13.4399876 9.26982116,12.0796082 Z"></Path>
			</G>
		</Svg>
	)
};

SmileIcon.propTypes = propTypes;
SmileIcon.defaultProps = defaultProps;

export default React.memo(SmileIcon);