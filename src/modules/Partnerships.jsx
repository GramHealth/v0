import Img from '../components/img/Img';
import ImgIcon from '../components/img/ImgIcon';

import ic_deliver from '../assets/icons/ic_deliver.svg';
import ic_med from '../assets/icons/ic_med.svg';
import ic_qual from '../assets/icons/ic_qual.svg';
import ic_pharm from '../assets/icons/ic_pharm.svg';
import ic_arrow_diag from '../assets/icons/ic_arrow_diag.svg';

const list_partner_feats = [
	{
		id: 1,
		pic: ic_deliver,
		label: 'Doorstep Delivery',
	},

	{
		id: 2,
		pic: ic_med,
		label: '100% Genuine Medicines',
	},

	{
		id: 3,
		pic: ic_qual,
		label: 'Assured Quality',
	},

	{
		id: 4,
		pic: ic_pharm,
		label: 'Verified Pharmacies',
	},
];

export default function Partnerships() {
	return (
		<div className='alter_sections_container partner_container flex_res'>
			<div className='partner_title_container'>
				{/* <ImgIcon
					src={ic_arrow_diag}
					className='partner_icon'
				/> */}
				<p className='partner_title test_resp'>
					How GramHealth Partners With Trusted Pharmacies
				</p>
			</div>
			<ul className='list partner_list'>
				{list_partner_feats.map((item) => (
					<li
						className='partner_item'
						key={item.id}
					>
						<div className='partner_img_container'>
							<Img
								src={item.pic}
								alt='partner 1'
								className='partner_img'
							/>
						</div>
						<p className='partner_label'>{item.label}</p>
					</li>
				))}
			</ul>
		</div>
	);
}
