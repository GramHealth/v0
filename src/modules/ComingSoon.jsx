import { lazy, Suspense } from 'react';
import '../assets/styles/coming_soon.css';

const Hero = lazy(() => import('./Hero.jsx'));
const ActiveAreas = lazy(() => import('./ActiveAreas.jsx'));
const Mission = lazy(() => import('./Mission.jsx'));
const Partnerships = lazy(() => import('./Partnerships.jsx'));
const HowItWorks = lazy(() => import('./HowItWorks.jsx'));
const CallToAction = lazy(() => import('./CTACard.jsx'));
const ExpressDelivery = lazy(() => import('./ExpressDelivery.jsx'));

export default function ComingSoon() {
	return (
		<div className='app_container'>
			<Hero />
			<div className='width_container'>
				<Suspense fallback={<div className='loader'>Loading...</div>}>
					<ActiveAreas />
					<Mission />
					<Partnerships />
					<HowItWorks />
					<CallToAction />
					<ExpressDelivery />
				</Suspense>
			</div>
		</div>
	);
}
