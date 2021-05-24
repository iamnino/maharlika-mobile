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

const ShoppingBagIcon = (props: any) => {
	return (
		<Svg width={props.width} height={props.height} viewBox={props.viewBox} style={props.style}>
			<G stroke="none" stroke-width="1" fill-rule="evenodd" transform="translate(0.000000, 0.000000)">
                <Path fill={props.color} fill-rule="nonzero" d="M22.8125,8.04545455 L19.25,8.04545455 L19.25,6.83636364 C19.25,4.16531376 17.1233526,2 14.5,2 C11.8766474,2 9.75,4.16531376 9.75,6.83636364 L9.75,8.04545455 L6.1875,8.04545455 C5.53166186,8.04545455 5,8.58678298 5,9.25454545 L5,22.5545455 C5,24.5578329 6.59498558,26.1818182 8.5625,26.1818182 L20.4375,26.1818182 C22.4050144,26.1818182 24,24.5578329 24,22.5545455 L24,9.25454545 C24,8.58678298 23.4683381,8.04545455 22.8125,8.04545455 Z M12.125,6.83636364 C12.125,5.5008387 13.1883237,4.41818182 14.5,4.41818182 C15.8116763,4.41818182 16.875,5.5008387 16.875,6.83636364 L16.875,8.04545455 L12.125,8.04545455 L12.125,6.83636364 Z M21.625,22.5545455 C21.625,23.2223079 21.0933381,23.7636364 20.4375,23.7636364 L8.5625,23.7636364 C7.90666186,23.7636364 7.375,23.2223079 7.375,22.5545455 L7.375,10.4636364 L9.75,10.4636364 L9.75,11.6727273 C9.75,12.3404897 10.2816619,12.8818182 10.9375,12.8818182 C11.5933381,12.8818182 12.125,12.3404897 12.125,11.6727273 L12.125,10.4636364 L16.875,10.4636364 L16.875,11.6727273 C16.875,12.3404897 17.4066619,12.8818182 18.0625,12.8818182 C18.7183381,12.8818182 19.25,12.3404897 19.25,11.6727273 L19.25,10.4636364 L21.625,10.4636364 L21.625,22.5545455 Z"></Path>
			</G>
		</Svg>
	)
};

ShoppingBagIcon.propTypes = propTypes;
ShoppingBagIcon.defaultProps = defaultProps;

export default React.memo(ShoppingBagIcon);