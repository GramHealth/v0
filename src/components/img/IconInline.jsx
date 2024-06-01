let star = '⚝';
let rupee = '₹';
let link = '🔗';
let arrow_right = '➡';

export default function IconInline(props) {
	let { children = arrow_right, className, pos = 'none' } = props;

	return (
		<span
			className={`icon ${className}`}
			role='img'
			pos={pos}
		>
			{children}
		</span>
	);
}
