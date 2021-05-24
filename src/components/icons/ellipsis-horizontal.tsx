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

const EllipsisHorizontalIcon = (props: any) => {
	return (
		<Svg width={props.width} height={props.height} viewBox={props.viewBox} style={props.style}>
			<G stroke="none" stroke-width="1" fill-rule="evenodd" transform="translate(0.000000, 0.000000)">
                <Path fill={props.color} fill-rule="nonzero" d="M14.5,13 C13.2166667,13 12.1666667,14.05 12.1666667,15.3333333 C12.1666667,16.6166667 13.2166667,17.6666667 14.5,17.6666667 C15.7833333,17.6666667 16.8333333,16.6166667 16.8333333,15.3333333 C16.8333333,14.05 15.7833333,13 14.5,13 Z M6.33333333,13 C5.05,13 4,14.05 4,15.3333333 C4,16.6166667 5.05,17.6666667 6.33333333,17.6666667 C7.61666667,17.6666667 8.66666667,16.6166667 8.66666667,15.3333333 C8.66666667,14.05 7.61666667,13 6.33333333,13 Z M22.6666667,13 C21.3833333,13 20.3333333,14.05 20.3333333,15.3333333 C20.3333333,16.6166667 21.3833333,17.6666667 22.6666667,17.6666667 C23.95,17.6666667 25,16.6166667 25,15.3333333 C25,14.05 23.95,13 22.6666667,13 Z"></Path>
			</G>
		</Svg>
	)
};

EllipsisHorizontalIcon.propTypes = propTypes;
EllipsisHorizontalIcon.defaultProps = defaultProps;

export default React.memo(EllipsisHorizontalIcon);