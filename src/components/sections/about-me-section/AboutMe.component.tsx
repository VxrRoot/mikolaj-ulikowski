import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {AiFillFacebook, AiFillInstagram, AiFillLinkedin} from 'react-icons/ai';

// Styled Components
import {Wrapper, StyledSection, PhotoWr, AboutWr, StyledCircle} from './AboutMe.styles';

// Assets
import AvatarImg from '../../../assets/mikolaj - koło.png';

// Components
import SectionTitle from '../../elements/section-title/SectionTitle.component';
import RowTemplate from '../../templates/RowTemplate';
import Circle from '../../elements/circle/Circle.component';

const AboutMe = () => {
	return (
		<StyledSection>
			<RowTemplate>
				<SectionTitle title="Porozmawiajmy!" />
				<Wrapper>
					<PhotoWr>
						<Image src={AvatarImg} layout="responsive" alt="Mikolaj_zdjecie" />
					</PhotoWr>
					<AboutWr>
						<h4>Kim jestem?</h4>
						<ul>
							<li>3 lata doświadczenia w marketingu internetowym</li>
							<li>Specjalista od e-commerce szczególnie w branży sklepów internetowych</li>
							<li>Ponad 1000 przeszkolonych osób</li>
						</ul>
						<p>Znajdziesz mnie w social mediach</p>
						<div className="social_icons">
							<div className="single_icon">
								<Link href="https://www.instagram.com">
									<a target="_blank">
										<AiFillInstagram />
									</a>
								</Link>
							</div>
							<div className="single_icon">
								<Link href="https://www.facebook.com" >
									<a target="_blank">
										<AiFillFacebook />
									</a>
								</Link>
							</div>
							<div className="single_icon">
								<Link href="https://www.linkedin.com" >
									<a target="_blank">
										<AiFillLinkedin />
									</a>
								</Link>
							</div>
						</div>
					</AboutWr>
				</Wrapper>
			</RowTemplate>
			<StyledCircle>
				<Circle />
			</StyledCircle>
		</StyledSection>
	);
};

export default AboutMe;
