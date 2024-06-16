import Img from '../components/img/Img';
import ImgIcon from '../components/img/ImgIcon';
import { img_delivery_express } from '../utils/constants';
import ic_express from '../assets/icons/ic_express.svg';

export default function ExpressDelivery() {
	return (
		<div className='alter_sections_container flex_reverse express_container'>
			<Img
				src={img_delivery_express}
				className='img_express'
				alt='express delivery coming soon'
			/>
			<div className='express_msg_container'>
				<h3 className='express_title'>
					<span className='express_title_main'>
						Express Delivery{' '}
					</span>
					<ImgIcon
						src={ic_express}
						className='express_icon'
					/>
				</h3>
				<p className='express_msg'>
					A promise of delivery with lightening fast speeds.{' '}
					<b>Stay Tuned!</b>{' '}
				</p>
			</div>
		</div>
	);
}
