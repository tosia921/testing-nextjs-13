'use client';

import { useRouter } from 'next/navigation';
import React, { useState, useTransition } from 'react';

const AddItem = () => {
	const [title, setTitle] = useState<string>('');
	const [isPending, startTransition] = useTransition();
	const [isFetching, setIsFetching] = useState(false);

	const isMutating = isFetching || isPending;

	const router = useRouter();

	const create = async (e) => {
		e.preventDefault();
		setIsFetching(true);

		console.log(title);
		await fetch('http://127.0.0.1:8090/api/collections/posts/records', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				title,
			}),
		});

		setTitle('');

		setIsFetching(false);

		startTransition(() => {
			// Refresh the current route and fetch new data from the server without
			// losing client-side browser or React state.
			router.refresh();
		});
	};

	return (
		<form onSubmit={create} style={{ opacity: !isMutating ? 1 : 0.7 }}>
			<h1>Add item</h1>
			<input type="text" placeholder="title..." value={title} onChange={(e) => setTitle(e.target.value)} />
			<button type="submit">Post Item</button>
		</form>
	);
};

export default AddItem;
