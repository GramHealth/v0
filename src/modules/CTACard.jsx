import Img from '../components/img/Img';
import ImgIcon from '../components/img/ImgIcon';

import ic_whats from '../assets/icons/ic_whats.svg';

const img_cta = `https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`;

export default function CTACard() {
	return (
		<div className='flex_reverse cta_card_container'>
			<Img
				src={img_cta}
				alt='accepting orders on whatsapp'
				className='img_card_cta'
			/>
			<div className='cta_card_info'>
				<h2 className='cta_card_main'>Now Accepting</h2>
				<p className='cta_card_msg'>
					Cash on Delivery & Monthly Subscriptions
				</p>
				<a
					href='https://wa.me/919876543210?text=Hey%20I%20want%20to%20make%20an%20order%20from%20GramHealth'
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
