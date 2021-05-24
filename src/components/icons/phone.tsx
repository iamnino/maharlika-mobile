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

const PhoneIcon = (props: any) => {
	return (
		<Svg width={props.width} height={props.height} viewBox={props.viewBox} style={props.style}>
			<G stroke="none" stroke-width="1" transform="translate(5.000000, 2.000000)" fill="none" fill-rule="evenodd">
                <Path fill="#8FC4FD" d="M11,20 L3,20 C1.34389511,19.9981923 0.00180771165,18.6561049 -1.33226763e-15,17 L-1.33226763e-15,3 C0.00180771165,1.34389511 1.34389511,0.00180771165 3,0 L11,0 C12.6561049,0.00180771165 13.9981923,1.34389511 14,3 L14,17 C13.9981923,18.6561049 12.6561049,19.9981923 11,20 L11,20 Z"></Path>
                <Path fill="#007AFF" d="M7.19991022,16.3991868 C6.79859793,16.402951 6.42247599,16.2040426 6.19977611,15.8702756 C5.97707623,15.5365086 5.93786469,15.1129442 6.09550994,14.7439889 C6.15638512,14.5985258 6.24178169,14.4645861 6.34798097,14.3480023 C6.63511724,14.0649694 7.0443107,13.9433252 7.43949433,14.0235193 C7.51471304,14.0370639 7.58754581,14.0615332 7.65568037,14.0961504 C7.73232815,14.1220406 7.80506955,14.158299 7.87187842,14.2039156 C7.93163345,14.2518965 7.99140049,14.2999734 8.05174348,14.3480023 C8.16009894,14.4628087 8.24561274,14.5971778 8.30372255,14.7439409 C8.49529117,15.1902032 8.39550877,15.7081179 8.05183947,16.0513251 C7.93250557,16.1568868 7.79924045,16.2455717 7.65577636,16.3148963 C7.51083423,16.3726537 7.35592876,16.401296 7.19991022,16.3991868 L7.19991022,16.3991868 Z"></Path>
            </G>
		</Svg>
	)
};

PhoneIcon.propTypes = propTypes;
PhoneIcon.defaultProps = defaultProps;

export default React.memo(PhoneIcon);