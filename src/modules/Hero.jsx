import ImgIcon from '../components/img/ImgIcon';
import Img from '../components/img/Img';

import gh_logo from '../assets/logo/gh.svg';
import ic_bolt from '../assets/icons/ic_bolt.svg';
import ic_whats from '../assets/icons/ic_whats.svg';
import { hero_img, whatsapp_link } from '../utils/constants';

export default function Hero() {
	return (
		<div className='hero_back flex_res'>
			<div className='hero_cta_container'>
				<div className='logo_container'>
					<a
						href='https://react.dev'
						target='_blank'
					>
						<Img
							src={gh_logo}
							className='logo logo_gh'
							alt='GramHealth logo'
						/>
						{/* <img
							src={gh_logo}
							className='logo logo_gh	'
							alt='GramHealth logo'
						/> */}
					</a>
				</div>

				<div className='cta_copy'>
					<h2 className='hero_title'>
						Order medicine & get it delivered within 30 minutes{' '}
						<ImgIcon src={ic_bolt} />
					</h2>
					<p className='hero_sub'>
						A complete range of medicines delivered to your doorsteps,
						at the fastest possible speed.
					</p>
				</div>
				<a
					href={whatsapp_link}
					className='lnk lnk_btn lnk_btn_order'
				>
					<span className=''>Order Now</span>
					<ImgIcon
						src={ic_whats}
						className='ic_whats'
					/>
				</a>
			</div>
			<Img
				src={hero_img}
				className='hero_img'
				alt='a fast rider, bringing medicines to you'
			/>
		</div>
	);
}
