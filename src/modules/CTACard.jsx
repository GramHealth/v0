import Img from '../components/img/Img';
import ImgIcon from '../components/img/ImgIcon';

import ic_whats from '../assets/icons/ic_whats.svg';

export default function CTACard() {
	return (
		<div className='cta_card_container'>
			<Img
				src=''
				alt=''
				className='img_card_cta'
			/>
			<div className='cta_card_info'>
				<h2 className='cta_card_main'>Now Accepting</h2>
				<p className='cta_card_msg'>
					Cash on Delivery & Monthly Subscriptions
				</p>
				<a
					href='https://www.google.com'
					className='lnk lnk_btn lnk_btn_order'
				>
					<span className=''>Order Now</span>
					<ImgIcon
						src={ic_whats}
						className=''
					/>
				</a>
			</div>
		</div>
	);
}
