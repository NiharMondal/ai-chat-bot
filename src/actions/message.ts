"use server";

const url = process.env.NEXT_PUBLIC_URL;

export const handleMessage = async (formData: FormData) => {
	const data = {
		text: formData.get("text") as string,
	};

	const res = await fetch(`${url}/api/chat` as string, {
		method: "POST",
		body: JSON.stringify(data),
	});

	if (!res.ok) {
		throw new Error("Try again Later");
	}
	return {
		prompt: data.text,
		data: await res.json(),
	};
};
