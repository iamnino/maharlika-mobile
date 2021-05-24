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
	color: '#242526',
	style: {}
};

const BackIcon = (props: any) => {
	return (
		<Svg width={props.width} height={props.height} viewBox={props.viewBox} style={props.style}>
			<G stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
				<Path fill={props.color} fill-rule="nonzero" d="M17.7433051,25 C17.3052893,25 16.8702736,24.8094931 16.5732629,24.4404798 L9.3310019,15.4401555 C8.88398579,14.8836354 8.88998601,14.0886068 9.3475025,13.539587 L16.8477728,4.5392626 C17.3772919,3.90323967 18.323826,3.81773659 18.961349,4.34725568 C19.5973719,4.87677476 19.682875,5.82330887 19.1518558,6.45933179 L12.4391139,14.5161222 L18.9118472,22.559412 C19.4308659,23.2044353 19.3288622,24.1494693 18.6823389,24.6684881 C18.406329,24.8919961 18.073317,25 17.7433051,25"></Path>
			</G>
		</Svg>
	)
};

BackIcon.propTypes = propTypes;
BackIcon.defaultProps = defaultProps;

export default React.memo(BackIcon);