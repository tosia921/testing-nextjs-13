export default function CardUI() {
	const data = {
		products: [
			{
				title: 'Loading...',
			},
			{
				title: 'Loading...',
			},
			{
				title: 'Loading...',
			},
			{
				title: 'Loading...',
			},
			{
				title: 'Loading...',
			},
		],
	};
	return (
		<div>
			{data.products.map((item, index) => (
				<div className="bg-gray-400 animate-pulse mb-5 px-5 py-10 flex justify-center items-center w-full" key={index}>
					<div>{item.title}</div>
				</div>
			))}
		</div>
	);
}
