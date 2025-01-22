"use server";

export const handleMessage = async (formData: FormData) => {
	const data = {
		text: formData.get("text") as string,
	};

	const res = await fetch(process.env.NEXT_PUBLIC_URL as string, {
		method: "POST",
		body: JSON.stringify(data),
		headers: {
			"Content-Type": "application/json",
		},
	});

	if (!res.ok) {
		throw new Error("Try again Later");
	}
	return {
		prompt: data.text,
		data: await res.json(),
	};
};
