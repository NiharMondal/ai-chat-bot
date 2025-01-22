import MessageForm from "@/components/MessageForm";
import ThemeSwitch from "@/components/themes/SwitchTheme";

export default function Home() {
	return (
		<main className="overflow-hidden">
			<h1 className="pl-5 md:pl-0 md:text-center text-3xl font-semibold font-mono py-5">
				Chat With AI 🤖
			</h1>
			<MessageForm />

			<ThemeSwitch />
		</main>
	);
}
