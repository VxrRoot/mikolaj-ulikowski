import {FC} from 'react';
import Link from 'next/link'

// Icons
import {AiFillInstagram, AiFillLinkedin, AiFillFacebook} from 'react-icons/ai';

// Assets
import SvgLogo from '../../../assets/logo.svg';

// Data
import {navItems} from '../../navigation/Navigation.data';

// Styled Components
import {StyledFooter, StyledFooterCopyrights, StyledFooterInfo, StyledParagraph} from './Footer.styles';

// Components
import RowTemplate from '../../templates/RowTemplate';

const Footer: FC = () => {
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
									{
										navItems.map((item, idx) => (
											<li
												key={idx}
											>
												{item.name}
											</li>
										))
									}
								</ul>
							</nav>
						</div>
						<div className="contact">
							<StyledParagraph>Kontakt</StyledParagraph>
							<p className="contact_paragraph">+48 000 000 000</p>
							<p className="contact_paragraph">+48 000 000 000</p>
							<a href="mailto: mikolajulikowski@gmail.com">mikolajulikowski@gmail.com</a>
						</div>
					</div>
				</RowTemplate>
			</StyledFooterInfo>
			<StyledFooterCopyrights>
				<RowTemplate>
					<div className="copy_social_wr">
						<div className="copyrights">
							&copy; 2022. Wszelkie prawa zastrzeżone Ulikowski.pl
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
