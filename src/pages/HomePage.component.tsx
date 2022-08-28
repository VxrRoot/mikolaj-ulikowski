import React, {FC, useRef} from 'react';

// Components
import HeroSection from '../components/sections/hero-section/HeroSection.component';
import StatisticsSection from '../components/sections/statistics-section/StatisticsSection.component';
import SpecializationsSection from '../components/sections/specializations-section/SpecializationsSection.component';
import OpinionSection from '../components/sections/opinion-section/OpinionSection.component';
import AboutMe from '../components/sections/about-me-section/AboutMe.component';
import BookConsultation from '../components/sections/book-consultation/BookConsultation.component';
import MainTemplate from '../components/templates/MainTemplate';

const HomePage: FC = () => {
	const heroSectionRef = useRef<HTMLDivElement>(null);
	const specializationsSectionRef = useRef<HTMLDivElement>(null!);
	const opinionSectionRef = useRef<HTMLDivElement>(null!);
	
	return (
		<MainTemplate
			offerRef={specializationsSectionRef}
			opinionRef={opinionSectionRef}
		>
			<HeroSection  />
			<StatisticsSection />
			<SpecializationsSection ref={specializationsSectionRef} />
			<OpinionSection ref={opinionSectionRef} />
			<AboutMe />
			<BookConsultation />
		</MainTemplate>
	);
};

export default HomePage;
