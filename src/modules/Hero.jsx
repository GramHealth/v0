import ImgIcon from '../components/img/ImgIcon';
import Img from '../components/img/Img';

import gh_logo from '../assets/logo/gh.svg';
import ic_bolt from '../assets/icons/ic_bolt.svg';
import ic_whats from '../assets/icons/ic_whats.svg';
import { whatsapp_link } from '../utils/constants';

const hero_img = `https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?q=80&w=1630&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`;

export default function Hero() {
	return (
		<div className='hero_back flex_res'>
			<div className='hero_cta_container'>
				<div className='logo_container'>
					<a
						href='https://react.dev'
						target='_blank'
					>
						<img
							src={gh_logo}
							className='logo logo_gh	'
							alt='GramHealth logo'
						/>
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
