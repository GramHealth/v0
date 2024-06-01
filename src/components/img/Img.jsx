import { Suspense } from 'react';

import {
	img_placeholder_wide,
	img_placeholder_min,
} from '../../utils/constants';

export default function Img(props) {
	let {
		src = img_placeholder_wide,
		fallback = img_placeholder_min,
		alt = 'some relevant pic',
		width = '400px',
		height = '400px',
		loading = 'lazy',
		decoding = 'async',
		className = '',
	} = props;

	return (
		<Suspense
			delay='10ms'
			fallback={
				<img
					src={fallback}
					alt={alt}
					className={`img img_fallback ${className}`}
					width={width}
					height={height}
					loading={loading}
					decoding={decoding}
				/>
			}
		>
			<img
				src={src || fallback}
				alt={alt}
				className={`img ${className}`}
				width={width}
				height={height}
				loading={loading}
				decoding={decoding}
			/>
		</Suspense>
	);
}
