async function getListItem(noteId: string) {
	const res = await fetch(`http://127.0.0.1:8090/api/collections/posts/records/${noteId}`, {
		next: { revalidate: 10 },
	});
	const data = await res.json();
	return data;
}

export default async function NotePage({ params }: any) {
	const listItem = await getListItem(params.id);

	console.log(listItem);

	return (
		<div className="h-80 w-full flex justify-center items-center">
			<h1>This is page title is: {listItem.title}</h1>
		</div>
	);
}
