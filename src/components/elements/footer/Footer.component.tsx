import {FC, MutableRefObject} from 'react';
import Link from 'next/link'

// Icons
import {AiFillInstagram, AiFillLinkedin, AiFillFacebook, AiOutlineMail} from 'react-icons/ai';
import {HiMail} from 'react-icons/hi';

// Assets
import SvgLogo from '../../../assets/logo.svg';

// Hooks
import UseScrollToSection from '../../../hooks/UseScrollToSection.hook';

// Styled Components
import {StyledFooter, StyledFooterCopyrights, StyledFooterInfo, StyledParagraph} from './Footer.styles';

// Components
import RowTemplate from '../../templates/RowTemplate';

interface IFooter {
	offerRef: MutableRefObject<HTMLDivElement>;
	opinionRef: MutableRefObject<HTMLDivElement>;
	contactRef: MutableRefObject<HTMLDivElement>;
}

const Footer: FC<IFooter> = ({contactRef, offerRef, opinionRef}) => {

	const {handleScrollToSection} = UseScrollToSection();

	return (
		<StyledFooter>
			<StyledFooterInfo>
				<RowTemplate>
					<div className="info_wr">
						<div className="info">
							<div className="logo_wr">
								<SvgLogo />
							</div>
							<p>
								Zadbam o Twój marketing w Social Mediach, który będzie regularnie dostarczał Ci nowych klientów i zwiększał sprzedaż. A to wszystko przy minimalnym zaangażowaniu z Twojej strony.
							</p>
						</div>
						<div className="navigation">
							<StyledParagraph>Nawigacja</StyledParagraph>
							<nav className="footer_nav">
								<ul>
									<li>
										<span onClick={() => handleScrollToSection(offerRef)}>
											Home
										</span>
									</li>
									<li>
										<span onClick={() => handleScrollToSection(offerRef)}>
											Oferta
										</span>
									</li>
									<li>
										<span onClick={() => handleScrollToSection(opinionRef)}>
											Opinie
										</span>
									</li>
									<li>
										<span onClick={() => handleScrollToSection(contactRef)}>
											Kontakt
										</span>
									</li>
								</ul>
							</nav>
						</div>
						<div className="contact">
							<StyledParagraph>Kontakt</StyledParagraph>
							<a href="tel:+48-798-558-732">+48 798 558 732</a> <br />
							<a href="mailto: mikolajulikowski@gmail.com">mikolajulikowski@gmail.com</a>
						</div>
					</div>
				</RowTemplate>
			</StyledFooterInfo>
			<StyledFooterCopyrights>
				<RowTemplate>
					<div className="copy_social_wr">
						<div className="copyrights">
							<p>&copy; 2022. Wszelkie prawa zastrzeżone Ulikowski.pl</p><br />
						 	<p className='author_paragraph'>Strona stworzona przez: 
								<a href="https://www.linkedin.com/in/dawid-s%C5%82owik-343847233/" target="_blank">
									<span> Dawid Słowik</span>
								</a> 
								<a href="mailto: dawidslowik379@gmail.com" className='icon_mail_author'>
									<HiMail />
								</a>
							</p>
						</div>
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
					</div>
				</RowTemplate>
			</StyledFooterCopyrights>
		</StyledFooter>
	);
};

export default Footer;
