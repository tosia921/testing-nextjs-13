import Link from 'next/link';

// interface Product {
// 	id: number;
// 	title: string;
// 	description: string;
// 	price: number;
// 	discountPercentage: number;
// 	rating: number;
// 	stock: number;
// 	brand: string;
// 	category: string;
// 	thumbnail: string;
// 	images: string[];
// }

// interface Data {
// 	products: Product[];
// }

const delayFetch = (url: string, options: object) =>
	new Promise((resolve, fun) => {
		setTimeout(() => {
			resolve(fetch(url, options));
		}, options.delay);
	});

async function getData() {
	const res = await delayFetch('http://127.0.0.1:8090/api/collections/posts/records', {delay: 5000});
	// const res = await fetch('http://127.0.0.1:8090/api/collections/posts/records');

	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}

	return res.json();
}

export default async function Card(): Promise<JSX.Element> {
	const data = await getData();

	// console.log(data);

	return (
		<div>
			{data.items.map((item, index: number) => (
				<Link href={`/list/${item.id}`} className="flex flex-col gap-5 bg-gray-100 mb-5 hover:bg-gray-500 cursor-pointer" key={index}>
					<div className=" px-5 py-10 flex justify-center items-center">{item.title}</div>
				</Link>
			))}
		</div>
	);
}
