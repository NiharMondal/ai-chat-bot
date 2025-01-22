"use server";

const url = process.env.NEXT_PUBLIC_URL;

export const handleMessage = async (formData: FormData) => {
	const data = {
		text: (formData.get("text") as string) || "Hey buddy!",
	};

	const res = await fetch(`${url}/api/chat`, {
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
