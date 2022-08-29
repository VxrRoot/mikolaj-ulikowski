import {MutableRefObject} from 'react';

interface IModelMobileNav {
	isOpen: boolean;
	offerRef: MutableRefObject<HTMLDivElement>;
	opinionRef: MutableRefObject<HTMLDivElement>;
	contactRef: MutableRefObject<HTMLDivElement>;
	showMenu: () => void;
};


export type ModelMobileNav = IModelMobileNav;