import React, {FC, useRef} from 'react';

// Components
import HeroSection from '../components/sections/hero-section/HeroSection.component';
import StatisticsSection from '../components/sections/statistics-section/StatisticsSection.component';
import SpecializationsSection from '../components/sections/specializations-section/SpecializationsSection.component';
import OpinionSection from '../components/sections/opinion-section/OpinionSection.component';
import AboutMe from '../components/sections/about-me-section/AboutMe.component';
import BookConsultation from '../components/sections/book-consultation/BookConsultation.component';
import MainTemplate from '../components/templates/MainTemplate';

// Model
import {ModelGetQuery} from '../models/getDataQuery.model';

const HomePage: FC<ModelGetQuery> = ({data}) => {
	const heroSectionRef = useRef<HTMLDivElement>(null);
	const specializationsSectionRef = useRef<HTMLDivElement>(null!);
	const opinionSectionRef = useRef<HTMLDivElement>(null!);
	const meetingRef = useRef<HTMLDivElement>(null!);
	
	return (
		<MainTemplate
			offerRef={specializationsSectionRef}
			opinionRef={opinionSectionRef}
			contactRef={meetingRef}
		>
			<HeroSection 
				meetingRef={meetingRef} 
				pageContent={data.pageContent}	
			/>
			<StatisticsSection 
				budget={data.statistic.budget}
				clients={data.statistic.clients}
				roi={data.statistic.roi}
			/>
			<SpecializationsSection 
				ref={specializationsSectionRef} 
				specializations={data.allSpecializations}
			/>
			<OpinionSection 
				ref={opinionSectionRef} 
				allOpinions={data.allOpinions}
			/>
			<AboutMe ref={meetingRef} />
			{/* <BookConsultation /> */}
		</MainTemplate>
	);
};

export default HomePage;
