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

const CalendarIcon = (props: any) => {
	return (
		<Svg width={props.size} height={props.size} viewBox={props.viewBox} style={props.style}>
			<G stroke="none" stroke-width="1" transform="translate(-2.000000, -2.000000)" fill="none" fill-rule="evenodd">
                <Path fill={props.color} d="M18.65,3 C19.1628358,3 19.5855072,3.38604019 19.6432723,3.88337887 L19.65,4 L19.649,5.099 L21.9,5.1 C23.4976809,5.1 24.8036609,6.34891996 24.8949073,7.92372721 L24.9,8.1 L24.9,23 C24.9,24.6568542 23.5568542,26 21.9,26 L21.9,26 L7,26 C5.34314575,26 4,24.6568542 4,23 L4,23 L4,8.1 C4,6.44314575 5.34314575,5.1 7,5.1 L7,5.1 L9.25,5.099 L9.25,4 C9.25,3.44771525 9.69771525,3 10.25,3 C10.7628358,3 11.1855072,3.38604019 11.2432723,3.88337887 L11.25,4 L11.25,5.099 L17.649,5.099 L17.65,4 C17.65,3.44771525 18.0977153,3 18.65,3 Z M22.9,13.399 L6,13.399 L6,23 C6,23.5128358 6.38604019,23.9355072 6.88337887,23.9932723 L7,24 L21.9,24 C22.4522847,24 22.9,23.5522847 22.9,23 L22.9,23 L22.9,13.399 Z M9.25,7.099 L7,7.1 C6.44771525,7.1 6,7.54771525 6,8.1 L6,8.1 L6,11.399 L22.9,11.399 L22.9,8.1 C22.9,7.58716416 22.5139598,7.16449284 22.0166211,7.10672773 L21.9,7.1 L19.649,7.099 L19.65,8.2 C19.65,8.75228475 19.2022847,9.2 18.65,9.2 C18.1371642,9.2 17.7144928,8.81395981 17.6567277,8.31662113 L17.65,8.2 L17.649,7.099 L11.25,7.099 L11.25,8.2 C11.25,8.75228475 10.8022847,9.2 10.25,9.2 C9.73716416,9.2 9.31449284,8.81395981 9.25672773,8.31662113 L9.25,8.2 L9.25,7.099 Z"></Path>
			</G>
		</Svg>
	)
};

CalendarIcon.propTypes = propTypes;
CalendarIcon.defaultProps = defaultProps;

export default React.memo(CalendarIcon);