interface Product {
	id: number;
	firstName: string;
	lastName: string;
	maidenName: string;
	age: number;
	gender: string;
	email: string;
	phone: string;
	username: string;
	password: string;
	birthDate: string;
	image: string;
	bloodGroup: string;
	height: number;
	weight: number;
	eyeColor: string;
	hair: object[];
	domain: string;
	ip: string;
	address: object[];
	macAddress: string;
	university: string;
	bank: object[];
	company: object[];
	ein: string;
	ssn: string;
	userAgent: string;
}

interface Data {
	users: Product[];
}

//mocked up to show delay
const delayFetch = (url: string, options: object) =>
	new Promise((resolve) => {
		setTimeout(() => {
			resolve(fetch(url, options));
		}, options.delay);
	});
// end of delay function

async function getData(): Promise<Data> {
	// delayed
	// const res = await delayFetch('https://dummyjson.com/users', { delay: 7000 });

	//incremental static regeneration
	// const res = await fetch('https://dummyjson.com/users', {
	// 	next: { revalidate: 10 },
	// });

	//fetch data on every page visit
	const res = await fetch('https://dummyjson.com/users?limit=10', {
		cache: 'no-store',
	});

	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}
	return res.json();
}

export default async function Card2(): Promise<JSX.Element> {
	const data = await getData();

	return (
		<div>
			{data.users.map((item: Product, index: number) => (
				<div className="bg-gray-100 mb-5 px-5 py-10 flex justify-center items-center w-full" key={index}>
					<div>{item.username}</div>
				</div>
			))}
		</div>
	);
}
