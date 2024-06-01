import React from 'react';
import IconInline from '../img/IconInline';
import ImgIcon from '../img/ImgIcon';

import ic_insta from '../../assets/icons/ic_insta.svg';
import ic_linked from '../../assets/icons/ic_linked.svg';

export default function Footer() {
	return (
		<footer className='foot_container'>
			<div className='mission_container flex_res'>
				<section className='mission'>
					<h2 className='head mission_main'>Medicine for Life - </h2>
					<h3 className='head mission_sub'>
						Our Commitment to Saving Lives
					</h3>
					<p className='mission_desc'>
						Be a pioneer in accessing medication within minutes,
						ensuring that your health needs are addressed promptly and
						efficiently.
					</p>
				</section>
				<section className='socials'>
					<p className='cta_social'>Connect with us</p>
					<div className='flex social_list'>
						{/* <a
							className=''
							href='https://www.instagram.com/gramhealth.in?igsh=NWNodGU5MHFkcjlj'
						>
							<ImgIcon src={ic_insta} />
						</a> */}
						<a
							className=''
							href='https://www.instagram.com/gramhealth.in?igsh=NWNodGU5MHFkcjlj'
						>
							<ImgIcon src={ic_insta} />
						</a>
						<a
							className=''
							href='https://www.linkedin.com/company/gramhealth/'
						>
							<ImgIcon src={ic_linked} />
						</a>
					</div>
				</section>
			</div>
			<div className='copy_right'>
				<IconInline>©</IconInline> 2024 | Made with{' '}
				<IconInline>❤️</IconInline> by GramHealth
			</div>
		</footer>
	);
}
