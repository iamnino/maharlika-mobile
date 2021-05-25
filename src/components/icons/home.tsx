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

const HomeIcon = (props: any) => {
	return (
		<Svg width={props.size} height={props.size} viewBox={props.viewBox} style={props.style}>
			<G stroke="none" stroke-width="1" transform="translate(-2.000000, -2.000000)" fill="none" fill-rule="evenodd">
                <Path fill={props.color} d="M7.1,26 C5.38791728,26 4,24.6120827 4,22.9 L4,22.9 L4,11.35 C4,11.0414096 4.14247284,10.750104 4.38605939,10.5606478 L4.38605939,10.5606478 L13.8360594,3.21064778 C14.1971699,2.92978407 14.7028301,2.92978407 15.0639406,3.21064778 L15.0639406,3.21064778 L24.5139406,10.5606478 C24.7575272,10.750104 24.9,11.0414096 24.9,11.35 L24.9,11.35 L24.9,22.9 C24.9,24.6120827 23.5120827,26 21.8,26 L21.8,26 Z M14.45,5.266 L6,11.839 L6,22.9 C6,23.4670123 6.4290107,23.9338239 6.98014288,23.9935453 L6.98014288,23.9935453 L7.1,24 L10.299,24 L10.3,14.5 C10.3,13.9871642 10.6860402,13.5644928 11.1833789,13.5067277 L11.3,13.5 L17.6,13.5 C18.1128358,13.5 18.5355072,13.8860402 18.5932723,14.3833789 L18.6,14.5 L18.599,24 L21.8,24 C22.3670123,24 22.8338239,23.5709893 22.8935453,23.0198571 L22.9,22.9 L22.9,11.838 L14.45,5.266 Z M16.6,15.5 L12.3,15.5 L12.299,24 L16.599,24 L16.6,15.5 Z"></Path>
			</G>
		</Svg>
	)
};

HomeIcon.propTypes = propTypes;
HomeIcon.defaultProps = defaultProps;

export default React.memo(HomeIcon);