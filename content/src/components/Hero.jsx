// RemoteAppComponent.jsx
import { Suspense, lazy, useEffect, useRef, useState } from "react";

const RemoteApp = lazy(() => import("library/Hero"));
export const prerender = false;

export default function RemoteAppComponent({data}) {
	const containerRef = useRef();
	const [animate, setAnimate] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setAnimate(true);
				observer.disconnect();
			}
		});

		if (containerRef.current) {
			observer.observe(containerRef.current);
		}

		return () => observer.disconnect();
	}, []);

	return (
		<div ref={containerRef}>
			<Suspense fallback="Loading">
				<RemoteApp data={data} animate={animate} />
			</Suspense>
		</div>
	);
}
