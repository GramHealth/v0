import reactLogo from '../assets/logo/gh.svg';
import CTACard from './CTACard';

export default function ComingSoon() {
	return (
		<div className='app_container'>
			<div className='logo_container'>
				<a
					href='https://react.dev'
					target='_blank'
				>
					<img
						src={reactLogo}
						className='logo react'
						alt='React logo'
					/>
				</a>
			</div>
			<h2 className='head'>
				Saving Lives with 30 minute Medicine Delivery
			</h2>
			<div className='card'>
				<form
					action=''
					className='flex'
				>
					<input
						type='text'
						className='inp'
						placeholder='Enter your email'
					/>
					<button
						className='btn'
						type='button'
						onClick={() => alert('No Msgs yet. check back later')}
					>
						Notify Me
					</button>
				</form>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className='read-the-docs'>
				Click on the Vite and React logos to learn more
			</p>
			<CTACard />
		</div>
	);
}
