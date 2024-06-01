import { Suspense } from 'react';

const ic_default =
	'https://cdn-icons-png.flaticon.com/512/1384/1384031.png';

export default function ImgIcon(props) {
	const {
		src = ic_default,
		fallback = ic_default,
		alt = 'some relevant pic',
		width = '20px',
		height = '20px',
		loading = 'lazy',
		decoding = 'async',
		className = '',
		...rest
	} = props;

	const img_fall_back = (
		<img
			src={fallback}
			alt={alt}
			className={`icon ${className}`}
			width={width}
			height={height}
			loading='eager'
			decoding={'auto'}
			{...rest}
		/>
	);

	const img_main = (
		<img
			src={src || fallback}
			alt={alt}
			className={`icon ${className}`}
			width={width}
			height={height}
			loading='eager'
			decoding={'auto'}
			{...rest}
		/>
	);

	return (
		<Suspense
			delay='10ms'
			fallback={img_fall_back}
		>
			{img_main}
		</Suspense>
	);
}
