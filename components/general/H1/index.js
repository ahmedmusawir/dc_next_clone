import styled from 'styled-components';

export const H1 = styled.h1`
	font-family: ${props => props.theme.texts.headingFont};
	color: ${props => {
		let color;
		if (props.dark) {
			color = props.theme.colors.textColorDark;
		} else if (props.light) {
			color = props.theme.colors.textColorLight;
		} else {
			color = props.color ? props.color : props.theme.colors.primaryColor;
		}
		return color;
	}};
	font-size: ${props =>
		props.theme.texts.h1FontSize ? props.theme.texts.h1FontSize : props.size};
`;

H1.defaultProps = {
	size: '2.5rem',
	color: 'midnightblue',
};

export default H1;
