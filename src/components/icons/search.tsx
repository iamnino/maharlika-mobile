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

const SearchIcon = (props: any) => {
	return (
		<Svg width={props.size} height={props.size} viewBox={props.viewBox} style={props.style}>
			<G stroke="none" stroke-width="1" transform="translate(-2.000000, -2.000000)" fill="none" fill-rule="evenodd">
                <Path fill={props.color} d="M13.3333333,3 C19.0402757,3 23.6666667,7.62639092 23.6666667,13.3333333 C23.6666667,15.8264894 22.7837204,18.1134223 21.3134637,19.8984962 L25.7071068,24.2928932 C26.0976311,24.6834175 26.0976311,25.3165825 25.7071068,25.7071068 C25.3466228,26.0675907 24.7793918,26.0953203 24.3871006,25.7902954 L24.2928932,25.7071068 L19.8984962,21.3134637 C18.1134223,22.7837204 15.8264894,23.6666667 13.3333333,23.6666667 C7.62639092,23.6666667 3,19.0402757 3,13.3333333 C3,7.62639092 7.62639092,3 13.3333333,3 Z M13.3333333,5 C8.73096042,5 5,8.73096042 5,13.3333333 C5,17.9357062 8.73096042,21.6666667 13.3333333,21.6666667 C15.5868917,21.6666667 17.6315216,20.7721372 19.1315174,19.3187836 C19.1568369,19.2831544 19.1860683,19.2497181 19.2178932,19.2178932 C19.2497181,19.1860683 19.2831544,19.1568369 19.3179395,19.130199 C20.7721372,17.6315216 21.6666667,15.5868917 21.6666667,13.3333333 C21.6666667,8.73096042 17.9357062,5 13.3333333,5 Z"></Path>
			</G>
		</Svg>
	)
};

SearchIcon.propTypes = propTypes;
SearchIcon.defaultProps = defaultProps;

export default React.memo(SearchIcon);