import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import PropTypes from 'prop-types';

const propTypes = {
    size: PropTypes.number,
    viewBox: PropTypes.string,
    preserveAspectRatio: PropTypes.string,
    color: PropTypes.string,
	style: PropTypes.any
};

const defaultProps = {
	size: 24,
	viewBox: '0 0 24 24',
	preserveAspectRatio: '',
	color: '#242526',
	style: {}
};

const PlusIcon = (props: any) => {
	return (
		<Svg width={props.size} height={props.size} viewBox={props.viewBox} style={props.style}>
			<G stroke="none" stroke-width="1" transform="translate(-2.000000, -2.000000)" fill="none" fill-rule="evenodd">
                <Path fill={props.color} d="M14.25,8 C14.8972087,8 15.4295339,8.49187466 15.4935464,9.12219476 L15.5,9.25 L15.5,14 L20.25,14 C20.9403559,14 21.5,14.5596441 21.5,15.25 C21.5,15.8972087 21.0081253,16.4295339 20.3778052,16.4935464 L20.25,16.5 L15.5,16.5 L15.5,21.25 C15.5,21.9403559 14.9403559,22.5 14.25,22.5 C13.6027913,22.5 13.0704661,22.0081253 13.0064536,21.3778052 L13,21.25 L13,16.5 L8.25,16.5 C7.55964406,16.5 7,15.9403559 7,15.25 C7,14.6027913 7.49187466,14.0704661 8.12219476,14.0064536 L8.25,14 L13,14 L13,9.25 C13,8.55964406 13.5596441,8 14.25,8 Z"></Path>
			</G>
		</Svg>
	)
};

PlusIcon.propTypes = propTypes;
PlusIcon.defaultProps = defaultProps;

export default React.memo(PlusIcon);