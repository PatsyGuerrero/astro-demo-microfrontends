import { Suspense, lazy } from "react";
const RemoteApp = lazy(() => import("library/Menu"));

// Esto es para que se haga render bajo demanda
export const prerender = false;

export default function RemoteAppComponent({data}) {
	return (
		<Suspense fallback="Loading">
			<RemoteApp data={data}/>
		</Suspense>
	);
}