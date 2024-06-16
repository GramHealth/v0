import Img from '../components/img/Img';
import { img_hiw_1, img_hiw_2, img_hiw_3 } from '../utils/constants';

const list_hiw = [
	{
		id: 1,
		icon: img_hiw_1,
		label: 'Order Online at your convenience',
	},

	{
		id: 2,
		icon: img_hiw_2,
		label: 'We assign the best riders & stores',
	},

	{
		id: 3,
		icon: img_hiw_3,
		label: 'Receive your order in 30 mins or less',
	},
];
export default function HowItWorks() {
	return (
		<div className='howitworks_container'>
			<p className='hiw_title'>How it works</p>
			<ul className='list hiw_list flex_res'>
				{list_hiw.map((item) => (
					<li
						className='hiw_item flex_rev'
						key={item.id}
					>
						<div className='hiw_step_count_container'>
							<p className='hiw_step_count'>{item.id}</p>
						</div>
						<div className='hiw_rhs'>
							<Img
								src={item.icon}
								alt='how it works'
								className='hiw_img'
							/>
							<p className='hiw_label'>{item.label}</p>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
