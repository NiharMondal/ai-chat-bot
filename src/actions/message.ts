"use server";

export const handleMessage = async (formData: FormData) => {
	const data = {
		text: formData.get("text") as string,
	};

	const res = await fetch("http://localhost:3000/api/chat", {
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
