import {MutableRefObject} from 'react';

const UseScrollToSection = (showMenu?: () => void) => {

   const handleScrollToSection = (refElement: MutableRefObject<HTMLDivElement> ) => {
		refElement.current?.scrollIntoView({behavior: 'smooth'});
      showMenu && showMenu();
	}

   return {
      handleScrollToSection
   }
}

export default UseScrollToSection;