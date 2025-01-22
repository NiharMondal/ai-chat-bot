import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function Loading() {
	return (
		<section className="w-full flex flex-col space-y-3">
			<Skeleton className="h-[40px] w-[250px] rounded-lg text-right" />
			<Skeleton className="h-[80px] w-full rounded-lg" />
		</section>
	);
}
