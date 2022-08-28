import {MutableRefObject} from 'react';

interface IModelMobileNav {
	isOpen: boolean;
	offerRef: MutableRefObject<HTMLDivElement>;
	showMenu: () => void;
};


export type ModelMobileNav = IModelMobileNav;