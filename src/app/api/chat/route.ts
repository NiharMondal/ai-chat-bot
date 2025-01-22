import { NextResponse, type NextRequest } from "next/server";

import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(
	process.env.NEXT_PUBLIC_GEMINI_KEY as string
);
export async function POST(request: NextRequest) {
	const { text } = await request.json();

	const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

	const result = await model.generateContent(text);
	const data = result.response.text();

	return NextResponse.json({ message: data }, { status: 200 });
}
