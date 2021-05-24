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

const EllipsisIcon = (props: any) => {
	return (
		<Svg width={props.width} height={props.height} viewBox={props.viewBox} style={props.style}>
			<G stroke="none" stroke-width="1" transform="translate(3.000000, 10.000000)" fill="#007AFF" fill-rule="nonzero">
                <Circle id="Oval" cx="9" cy="2" r="2"></Circle>
                <Circle id="Oval" cx="2" cy="2" r="2"></Circle>
                <Circle id="Oval" cx="16" cy="2" r="2"></Circle> 
            </G>
		</Svg>
	)
};

EllipsisIcon.propTypes = propTypes;
EllipsisIcon.defaultProps = defaultProps;

export default React.memo(EllipsisIcon);