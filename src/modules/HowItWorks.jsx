import Img from '../components/img/Img';

const list_hiw = [
	{
		id: 1,
		icon: 'https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		label: 'Order Online at your convenience',
	},

	{
		id: 2,
		icon: 'https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?q=80&w=1630&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dk',
		label: 'We assign the best riders & stores',
	},

	{
		id: 3,
		icon: 'https://plus.unsplash.com/premium_photo-1663134275544-7d83fcfa0e54?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
