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
	width: 24,
	height: 24,
	viewBox: '0 0 24 24',
	preserveAspectRatio: '',
	color: '#242526',
	style: {}
};

const CalendarIcon = (props: any) => {
	return (
		<Svg width={props.width} height={props.height} viewBox={props.viewBox} style={props.style}>
			<G stroke="none" stroke-width="1" transform="translate(3.000000, 2.000000)" fill="none" fill-rule="evenodd">
                <Path fill={props.color} d="M8.29289322,11.2928932 C8.65337718,10.9324093 9.22060824,10.9046797 9.61289944,11.2097046 L9.70710678,11.2928932 L15,16.585 L20.2928932,11.2928932 C20.6533772,10.9324093 21.2206082,10.9046797 21.6128994,11.2097046 L21.7071068,11.2928932 C22.0675907,11.6533772 22.0953203,12.2206082 21.7902954,12.6128994 L21.7071068,12.7071068 L15.7071068,18.7071068 C15.3466228,19.0675907 14.7793918,19.0953203 14.3871006,18.7902954 L14.2928932,18.7071068 L8.29289322,12.7071068 C7.90236893,12.3165825 7.90236893,11.6834175 8.29289322,11.2928932 Z"></Path>
			</G>
		</Svg>
	)
};

CalendarIcon.propTypes = propTypes;
CalendarIcon.defaultProps = defaultProps;

export default React.memo(CalendarIcon);