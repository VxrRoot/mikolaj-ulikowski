import {MutableRefObject} from 'react';

const UseScrollToSection = (showMenu?: () => void) => {

   const handleScrollToSection = (refElement?: MutableRefObject<HTMLDivElement>) => {
      refElement ? refElement.current?.scrollIntoView({behavior: 'smooth'}) : document.body.scrollTop = document.documentElement.scrollTop = 0;
		
      showMenu && showMenu();
	}

   return {
      handleScrollToSection
   }
}

export default UseScrollToSection;