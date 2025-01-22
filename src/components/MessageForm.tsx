"use client";
import React, { useEffect, useRef, useState, useTransition } from "react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { ArrowUp } from "lucide-react";
import { handleMessage } from "@/actions/message";
import MessageBox from "./MessageBox";
import { TResponse } from "@/types";
import { renderMarkdownToHTML } from "@/lib/mdToHtml";
import Loading from "@/app/loading";

export default function MessageForm() {
	const [isPending, startTransition] = useTransition(); // for better UI design
	const [messages, setMessages] = useState<TResponse[]>([]);
	const [error, setError] = useState("");
	const messagesEndRef = useRef<HTMLDivElement>(null); // Ref for auto-scroll

	// Scroll to the bottom when messages change
	useEffect(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages]);

	const handleSubmit = (formData: FormData) => {
		startTransition(async () => {
			try {
				const res = await handleMessage(formData); // Server action

				const html = renderMarkdownToHTML(res?.data?.message);

				setMessages((prev) => [
					...prev,
					{ command: res?.prompt, response: html } as TResponse,
				]);
				setError(""); // Clear any previous error
			} catch (error) {
				setError("Something went wrong!");
				console.error(error);
			}
		});
	};

	return (
		<div className="w-full max-w-2xl mx-auto flex flex-col space-y-5 h-full custom_animation">
			{/** Message Box */}
			<div className="flex flex-col space-y-3 overflow-y-auto max-h-[440px] p-5 custom_scrollbar">
				<MessageBox messages={messages} />
				<div ref={messagesEndRef} /> {/* Invisible div for scrolling */}
			</div>

			{/* Error Handling */}
			{error && <p className="text-red-500">{error}</p>}
			{/* Loading Skeleton */}
			{isPending && <Loading />}
			{/* Form */}
			<div className="w-full p-5 md:px-0">
				<form className="relative w-full" action={handleSubmit}>
					<Textarea
						rows={4}
						className="text_area"
						placeholder="Message with AI 🤖"
						name="text"
					/>
					<Button
						type="submit"
						className={`absolute right-0 bottom-0 ${
							isPending
								? "cursor-not-allowed opacity-40"
								: "cursor-pointer"
						}`}
					>
						<ArrowUp />
						Send
					</Button>
				</form>
			</div>
		</div>
	);
}
