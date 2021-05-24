import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import PropTypes from 'prop-types';

const propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    viewBox: PropTypes.string,
    preserveAspectRatio: PropTypes.string,
    color: PropTypes.string,
    title: PropTypes.string,
    style: PropTypes.any
};

const defaultProps = {
	width: 29,
	height: 29,
	viewBox: '0 0 29 29',
	preserveAspectRatio: '',
	color: 'red',
    title: '',
    style: {}
};

const BoltIcon = (props: any) => {
	return (
		<Svg width={props.width} height={props.height} viewBox={props.viewBox} {...props}>
			<G stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(3.000000, 1.000000)">
                <Path fill={props.color} d="M21.8496061,10.8554872 C21.6164218,10.4194174 21.1430472,10.1437561 20.6248568,10.1422761 L13.744243,10.1422761 L13.744243,2.36179223 C13.7746031,1.77713936 13.3855408,1.24580461 12.7947183,1.06504491 C12.2278942,0.889310797 11.6054677,1.07783657 11.2534608,1.53187394 L0.244478748,15.7960944 C-0.036291903,16.1784801 -0.078296887,16.6732566 0.134388927,17.0928418 C0.331025412,17.5744802 0.812012031,17.9004078 1.35913818,17.9227601 L8.23975199,17.9227601 L8.23975199,25.703244 C8.24019049,26.264183 8.62332698,26.7612629 9.18927669,26.9351539 C9.32753945,26.9755363 9.47114986,26.9973632 9.61587475,27 C10.0563082,27.001068 10.470679,26.8034229 10.7305342,26.4683249 L21.7395163,12.2041044 C22.041813,11.8096306 22.0843221,11.2888869 21.8496061,10.8554872 Z M10.9919975,21.7092622 L10.9919975,16.6260127 C10.9919975,15.909839 10.3758864,15.3292654 9.61587475,15.3292654 L4.11138371,15.3292654 L10.9919975,6.35577397 L10.9919975,11.4390235 C10.9919975,12.1551972 11.6081087,12.7357708 12.3681203,12.7357708 L17.8726113,12.7357708 L10.9919975,21.7092622 Z"></Path>
			</G>
		</Svg>
	)
};

BoltIcon.propTypes = propTypes;
BoltIcon.defaultProps = defaultProps;

export default React.memo(BoltIcon);