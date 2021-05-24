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

const WalletIcon = (props: any) => {
	return (
		<Svg width={props.width} height={props.height} viewBox={props.viewBox} style={props.style}>
			<G stroke="none" stroke-width="1" fill-rule="evenodd" transform="translate(0.000000, 0.000000)">
                <Path fill={props.color} fill-rule="nonzero" d="M22.9,8.8 L21.7,8.8 L21.7,7.6 C21.7,5.6117749 20.0882251,4 18.1,4 L6.1,4 C4.1117749,4 2.5,5.6117749 2.5,7.6 L2.5,7.6 L2.5,22 C2.5,23.9882251 4.1117749,25.6 6.1,25.6 L22.9,25.6 C24.8882251,25.6 26.5,23.9882251 26.5,22 L26.5,12.4 C26.5,10.4117749 24.8882251,8.8 22.9,8.8 Z M6.1,6.4 L18.1,6.4 C18.7627417,6.4 19.3,6.9372583 19.3,7.6 L19.3,8.8 L6.1,8.8 C5.4372583,8.8 4.9,8.2627417 4.9,7.6 C4.9,6.9372583 5.4372583,6.4 6.1,6.4 Z M24.1,18.4 L22.9,18.4 C22.2372583,18.4 21.7,17.8627417 21.7,17.2 C21.7,16.5372583 22.2372583,16 22.9,16 L24.1,16 L24.1,18.4 Z M24.1,13.6 L22.9,13.6 C20.9117749,13.6 19.3000001,15.2117749 19.3000001,17.2 C19.3000001,19.1882251 20.9117749,20.8 22.9,20.8 L24.1,20.8 L24.1,22 C24.1,22.6627417 23.5627417,23.2 22.9,23.2 L6.1,23.2 C5.4372583,23.2 4.9,22.6627417 4.9,22 L4.9,10.996 C5.28552109,11.1316204 5.69132037,11.2006063 6.1,11.2 L22.9,11.2 C23.5627417,11.2 24.1,11.7372583 24.1,12.4 L24.1,13.6 Z"></Path>
			</G>
		</Svg>
	)
};

WalletIcon.propTypes = propTypes;
WalletIcon.defaultProps = defaultProps;

export default React.memo(WalletIcon);