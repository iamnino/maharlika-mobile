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

const ArchieveIcon = (props: any) => {
	return (
		<Svg width={props.width} height={props.height} viewBox={props.viewBox} style={props.style}>
			<G stroke="none" stroke-width="1" fill-rule="evenodd" transform="translate(0.000000, 0.000000)">
                <Path fill={props.color} fill-rule="nonzero" d="M12.1,17.0952381 L16.9,17.0952381 C17.5627417,17.0952381 18.1,16.5622437 18.1,15.9047619 C18.1,15.2472801 17.5627417,14.7142857 16.9,14.7142857 L12.1,14.7142857 C11.4372583,14.7142857 10.9,15.2472801 10.9,15.9047619 C10.9,16.5622437 11.4372583,17.0952381 12.1,17.0952381 Z M22.9,4 L6.1,4 C4.1117749,4 2.5,5.59898304 2.5,7.57142857 L2.5,11.1428571 C2.5,11.800339 3.0372583,12.3333333 3.7,12.3333333 L4.9,12.3333333 L4.9,21.8571429 C4.9,23.8295884 6.5117749,25.4285714 8.5,25.4285714 L20.5,25.4285714 C22.4882251,25.4285714 24.1,23.8295884 24.1,21.8571429 L24.1,12.3333333 L25.3,12.3333333 C25.9627417,12.3333333 26.5,11.800339 26.5,11.1428571 L26.5,7.57142857 C26.5,5.59898304 24.8882251,4 22.9,4 Z M21.7,21.8571429 C21.7,22.5146247 21.1627417,23.047619 20.5,23.047619 L8.5,23.047619 C7.8372583,23.047619 7.3,22.5146247 7.3,21.8571429 L7.3,12.3333333 L21.7,12.3333333 L21.7,21.8571429 Z M24.1,9.95238095 L4.9,9.95238095 L4.9,7.57142857 C4.9,6.91394673 5.4372583,6.38095238 6.1,6.38095238 L22.9,6.38095238 C23.5627417,6.38095238 24.1,6.91394673 24.1,7.57142857 L24.1,9.95238095 Z"></Path>
			</G>
		</Svg>
	)
};

ArchieveIcon.propTypes = propTypes;
ArchieveIcon.defaultProps = defaultProps;

export default React.memo(ArchieveIcon);