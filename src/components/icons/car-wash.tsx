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

const CarWashIcon = (props: any) => {
	return (
		<Svg width={props.width} height={props.height} viewBox={props.viewBox} style={props.style}>
			<G stroke="none" stroke-width="1" fill-rule="evenodd" transform="translate(0.000000, 0.000000)">
                <Path fill={props.color} fill-rule="nonzero" d="M9.775,6.17422686 C10.0540931,6.17583294 10.3223452,6.06557433 10.5205,5.86778921 L11.5705,4.81116864 C11.9822283,4.39684428 11.9822283,3.72509179 11.5705,3.31076744 C11.1587717,2.89644309 10.4912283,2.89644309 10.0795,3.31076743 L9.0295,4.367388 C8.83072172,4.56578605 8.71891176,4.8358539 8.71891176,5.1175886 C8.71891176,5.39932331 8.83072172,5.66939116 9.0295,5.86778921 C9.22765477,6.06557433 9.49590687,6.17583294 9.775,6.17422686 Z M13.975,6.17422686 C14.2540931,6.17583294 14.5223452,6.06557433 14.7205,5.86778921 L15.7705,4.81116864 C16.1822283,4.39684429 16.1822283,3.72509178 15.7705,3.31076743 C15.3587717,2.89644308 14.6912283,2.89644308 14.2795,3.31076743 L13.2295,4.367388 C13.0307217,4.56578605 12.9189118,4.8358539 12.9189118,5.1175886 C12.9189118,5.39932331 13.0307217,5.66939116 13.2295,5.86778921 C13.4276548,6.06557433 13.6959069,6.17583294 13.975,6.17422686 Z M18.175,6.17422686 C18.4540931,6.17583294 18.7223452,6.06557433 18.9205,5.86778921 L19.9705,4.81116864 C20.2368415,4.54314778 20.3408597,4.15249886 20.2433719,3.78637555 C20.1458842,3.42025225 19.8617012,3.13427739 19.4978719,3.03617495 C19.1340427,2.93807251 18.7458415,3.04274657 18.4795,3.31076743 L17.4295,4.367388 C17.2307217,4.56578605 17.1189118,4.8358539 17.1189118,5.1175886 C17.1189118,5.39932331 17.2307217,5.66939116 17.4295,5.86778921 C17.6276548,6.06557433 17.8959069,6.17583294 18.175,6.17422686 Z M20.716,18.4521402 C20.6930173,18.3848078 20.6612387,18.32085 20.6215,18.2619485 L20.4955,18.1034554 L20.338,17.9766609 C20.2794675,17.9366716 20.2159105,17.9046927 20.149,17.8815651 C20.086476,17.8493914 20.0190464,17.8279636 19.9495,17.8181679 C19.6069523,17.7491448 19.2527239,17.8560833 19.0045,18.1034554 C18.9593445,18.1536659 18.9172667,18.2065947 18.8785,18.2619485 C18.8387613,18.32085 18.8069827,18.3848078 18.784,18.4521402 C18.7537262,18.5120354 18.7324929,18.5761369 18.721,18.6423319 C18.715846,18.7126778 18.715846,18.7833101 18.721,18.853656 C18.7221599,19.1308497 18.8315186,19.3964836 19.0255,19.5932904 C19.1226115,19.6954698 19.240921,19.7748401 19.372,19.8257469 C19.4917028,19.8772617 19.619882,19.9059256 19.75,19.9102766 C20.329899,19.9102766 20.8,19.4372114 20.8,18.853656 C20.805154,18.7833101 20.805154,18.7126778 20.8,18.6423319 C20.7819208,18.5749525 20.7535853,18.5107956 20.716,18.4521402 Z M22.648,13.6867814 L21.22,9.39690191 C20.7735488,8.12615319 19.5773736,7.27846489 18.238,7.28363702 L10.762,7.28363702 C9.42262637,7.27846489 8.22645124,8.12615319 7.78,9.39690191 L6.352,13.6867814 C4.97094401,14.0507146 4.00577882,15.3038017 4,16.7404149 L4,20.9668972 C4.00374258,22.3069614 4.84448487,23.4998826 6.1,23.9465672 L6.1,25.1933794 C6.1,25.7769349 6.57010101,26.25 7.15,26.25 C7.72989899,26.25 8.2,25.7769349 8.2,25.1933794 L8.2,24.1367589 L20.8,24.1367589 L20.8,25.1933794 C20.8,25.7769349 21.270101,26.25 21.85,26.25 C22.429899,26.25 22.9,25.7769349 22.9,25.1933794 L22.9,23.9465672 C24.1555151,23.4998826 24.9962574,22.3069614 25,20.9668972 L25,16.7404149 C24.9942212,15.3038017 24.029056,14.0507146 22.648,13.6867814 Z M9.7645,10.0625729 C9.90895072,9.63219893 10.3105883,9.34289829 10.762,9.34407088 L18.238,9.34407088 C18.70856,9.31935498 19.1378564,9.61311719 19.288,10.0625729 L20.3905,13.5705532 L8.6095,13.5705532 L9.7645,10.0625729 Z M22.9,20.9668972 C22.9,21.5504526 22.429899,22.0235177 21.85,22.0235177 L7.15,22.0235177 C6.57010101,22.0235177 6.1,21.5504526 6.1,20.9668972 L6.1,16.7404149 C6.1,16.1568594 6.57010101,15.6837943 7.15,15.6837943 L21.85,15.6837943 C22.429899,15.6837943 22.9,16.1568594 22.9,16.7404149 L22.9,20.9668972 Z M15.55,17.7970354 L13.45,17.7970354 C12.870101,17.7970354 12.4,18.2701006 12.4,18.853656 C12.4,19.4372114 12.870101,19.9102766 13.45,19.9102766 L15.55,19.9102766 C16.129899,19.9102766 16.6,19.4372114 16.6,18.853656 C16.6,18.2701006 16.129899,17.7970354 15.55,17.7970354 Z M10.216,18.4521402 C10.1930173,18.3848078 10.1612387,18.32085 10.1215,18.2619485 L9.9955,18.1034554 C9.69356127,17.8036451 9.24201695,17.7161018 8.851,17.8815651 C8.72211112,17.9318543 8.6043589,18.00726 8.5045,18.1034554 C8.45934449,18.1536659 8.41726674,18.2065947 8.3785,18.2619485 C8.33876127,18.32085 8.30698273,18.3848078 8.284,18.4521402 C8.24641471,18.5107956 8.21807918,18.5749525 8.2,18.6423319 C8.19484597,18.7126778 8.19484597,18.7833101 8.2,18.853656 C8.20178056,19.2809999 8.45918961,19.6651887 8.85220502,19.8270866 C9.24522044,19.9889846 9.69645043,19.896711 9.9955,19.5932904 C10.1894814,19.3964836 10.2988401,19.1308497 10.3,18.853656 C10.305154,18.7833101 10.305154,18.7126778 10.3,18.6423319 C10.2819208,18.5749525 10.2535853,18.5107956 10.216,18.4521402 Z"></Path>
			</G>
		</Svg>
	)
};

CarWashIcon.propTypes = propTypes;
CarWashIcon.defaultProps = defaultProps;

export default React.memo(CarWashIcon);