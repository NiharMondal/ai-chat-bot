import { TResponse } from "@/types";

type Props = {
	messages: TResponse[];
};

export default function MessageBox({ messages }: Props) {
	return (
		<>
			{messages.map((val, index) => (
				<div key={index} className="flex flex-col">
					<p className="text-right my-5">
						<span className=" w-fit bg-accent p-3 rounded-md">
							{val.command}
						</span>
					</p>
					<div dangerouslySetInnerHTML={val?.response}></div>
				</div>
			))}
		</>
	);
}
