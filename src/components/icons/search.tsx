import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import PropTypes from 'prop-types';

const propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    viewBox: PropTypes.string,
    preserveAspectRatio: PropTypes.string,
    color: PropTypes.string,
	title: PropTypes.string
};

const defaultProps = {
	width: 29,
	height: 29,
	viewBox: '0 0 29 29',
	preserveAspectRatio: '',
	color: '#242526',
	title: ''
};

const SearchIcon = (props: any) => {
	return (
		<Svg width={props.width} height={props.height} viewBox={props.viewBox} {...props}>
			<G stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
				<Path fill={props.color} fill-rule="nonzero" d="M4.81944444,13.2777778 C4.81944444,8.61300694 8.61300694,4.81944444 13.2777778,4.81944444 C17.9425486,4.81944444 21.7361111,8.61300694 21.7361111,13.2777778 C21.7361111,17.9425486 17.9425486,21.7361111 13.2777778,21.7361111 C8.61300694,21.7361111 4.81944444,17.9425486 4.81944444,13.2777778 M26.9619514,24.9686042 L22.1759444,20.1811875 C23.6603819,18.2724236 24.5555556,15.880125 24.5555556,13.2777778 C24.5555556,7.05949306 19.4960625,2 13.2777778,2 C7.05949306,2 2,7.05949306 2,13.2777778 C2,19.4960625 7.05949306,24.5555556 13.2777778,24.5555556 C15.880125,24.5555556 18.2724236,23.6603819 20.1811875,22.1759444 L24.9686042,26.9619514 C25.2435,27.2368472 25.6043889,27.375 25.9652778,27.375 C26.3261667,27.375 26.6870556,27.2368472 26.9619514,26.9619514 C27.5131528,26.41075 27.5131528,25.5198056 26.9619514,24.9686042"></Path>
			</G>
		</Svg>
	)
};

SearchIcon.propTypes = propTypes;
SearchIcon.defaultProps = defaultProps;

export default React.memo(SearchIcon);