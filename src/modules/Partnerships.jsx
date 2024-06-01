import Img from '../components/img/Img';
import ic_deliver from '../assets/icons/ic_deliver.svg';
import ic_med from '../assets/icons/ic_med.svg';
import ic_qual from '../assets/icons/ic_qual.svg';
import ic_pharm from '../assets/icons/ic_pharm.svg';

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
		<div className='partner_container flex_res'>
			<p className='partner_title test_resp'>
				How GramHealth Partners With Trusted Pharmacies
			</p>
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
