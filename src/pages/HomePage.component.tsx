import React, {FC} from 'react';

// Components
import HeroSection from '../components/sections/hero-section/HeroSection.component';
import StatisticsSection from '../components/sections/statistics-section/StatisticsSection.component';
import MainTemplate from '../components/templates/MainTemplate';

const HomePage: FC = () => {
	
	return (
		<MainTemplate>
			<HeroSection />
			<StatisticsSection />
		</MainTemplate>
	);
};

export default HomePage;
