import 'styled-components';

// extend module
declare module 'styled-components' {
	export interface DefaultTheme {
		colorPeach: string,
		darkPeach: string,
		colorBlack: string,
		colorWhite: string,
		fontFamilyMontsserrat: string,
		fontFamilyOpenSans: string,
		colorBackgroundFooter: string,
		fontFamilyRoboto: string,
		colorGradientDark: string,
		colorGradientLight: string,
		fontWeightLight: string,
		fontWeightNormal: string,
		fontWeightBold: string,
	}
}