import React from 'react';
import styles from './page.module.scss';
import Card from '@/components/Card/Card';
import { Suspense } from 'react';
import Card2 from '@/components/Card2/Card2';
import CardUI from '@/components/CardUI/CardUI';
import AddItem from '@/components/form/addItem';

export default async function Page() {
	return (
		<div className="min-w-full">
			<h1 className="flex justify-center text-3xl my-10 font-medium">Welcome to the fetched list</h1>
			<div className="grid grid-cols-2 gap-x-6">
				<div className="w-full">
					<Suspense fallback={<CardUI />}>
						<Card />
					</Suspense>
				</div>
				<div className="w-full">
					<Suspense fallback={<CardUI />}>
						<Card2 />
					</Suspense>
				</div>
			</div>
			<AddItem />
		</div>
	);
}
