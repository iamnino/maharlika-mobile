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

const PaintRollerIcon = (props: any) => {
	return (
		<Svg width={props.width} height={props.height} viewBox={props.viewBox} style={props.style}>
			<G stroke="none" stroke-width="1" fill-rule="evenodd" transform="translate(0.000000, 0.000000)">
                <Path fill={props.color} fill-rule="nonzero" d="M20.3333333,3.5 L11.8888889,3.5 C10.1399872,3.5 8.72222222,4.8809399 8.72222222,6.58441558 L7.66666667,6.58441558 C5.91776496,6.58441558 4.5,7.96535548 4.5,9.66883117 L4.5,12.7532468 C4.5,14.4567224 5.91776496,15.8376623 7.66666667,15.8376623 L14,15.8376623 C14.5829672,15.8376623 15.0555556,16.2979756 15.0555556,16.8658009 L15.0555556,17.8939394 C13.8896211,17.8939394 12.9444444,18.814566 12.9444444,19.9502165 L12.9444444,24.0627706 C12.9444444,25.198421 13.8896211,26.1190476 15.0555556,26.1190476 L17.1666667,26.1190476 C18.3326011,26.1190476 19.2777778,25.198421 19.2777778,24.0627706 L19.2777778,19.9502165 C19.2777778,18.814566 18.3326011,17.8939394 17.1666667,17.8939394 L17.1666667,16.8658009 C17.1666667,15.1623252 15.7489017,13.7813853 14,13.7813853 L7.66666667,13.7813853 C7.08369943,13.7813853 6.61111111,13.321072 6.61111111,12.7532468 L6.61111111,9.66883117 C6.61111111,9.10100594 7.08369943,8.64069264 7.66666667,8.64069264 L8.72222222,8.64069264 C8.72222222,10.3441683 10.1399872,11.7251082 11.8888889,11.7251082 L20.3333333,11.7251082 C22.082235,11.7251082 23.5,10.3441683 23.5,8.64069264 L23.5,6.58441558 C23.5,4.8809399 22.082235,3.5 20.3333333,3.5 Z M17.1666667,19.9502165 L17.1666667,24.0627706 L15.0555556,24.0627706 L15.0555556,19.9502165 L17.1666667,19.9502165 Z M21.3888889,8.64069264 C21.3888889,9.20851787 20.9163006,9.66883117 20.3333333,9.66883117 L11.8888889,9.66883117 C11.3059217,9.66883117 10.8333333,9.20851787 10.8333333,8.64069264 L10.8333333,6.58441558 C10.8333333,6.01659035 11.3059217,5.55627706 11.8888889,5.55627706 L20.3333333,5.55627706 C20.9163006,5.55627706 21.3888889,6.01659035 21.3888889,6.58441558 L21.3888889,8.64069264 Z"></Path>
			</G>
		</Svg>
	)
};

PaintRollerIcon.propTypes = propTypes;
PaintRollerIcon.defaultProps = defaultProps;

export default React.memo(PaintRollerIcon);