import '../assets/styles/coming_soon.css';

import Hero from './Hero';
import ActiveAreas from './ActiveAreas';
import Mission from './Mission';
import Partnerships from './Partnerships';
import HowItWorks from './HowItWorks';
import CTACard from './CTACard';
import ExpressDelivery from './ExpressDelivery';

export default function ComingSoon() {
	return (
		<div className='app_container'>
			<Hero />
			<div className='width_container'>
				<ActiveAreas />
				<Mission />
				<Partnerships />
				<HowItWorks />
				<CTACard />
				<ExpressDelivery />
			</div>
		</div>
	);
}
