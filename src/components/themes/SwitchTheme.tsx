"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const ThemeSwitch = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme, systemTheme } = useTheme();
	const currentTheme = theme === "system" ? systemTheme : theme;
	// useEffect only runs on the client, so now we can safely show the UI
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<div className="absolute right-5 top-5">
			<Select value={currentTheme} onValueChange={(e) => setTheme(e)}>
				<SelectTrigger className="max-w-fit">
					<SelectValue placeholder="Theme" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectItem value="light">Light</SelectItem>
						<SelectItem value="dark">Dark</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
		</div>
	);
};

export default ThemeSwitch;
