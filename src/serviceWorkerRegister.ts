interface Config {
	onSuccess?: (registration: ServiceWorkerRegistration) => void;
	onUpdate?: (registration: ServiceWorkerRegistration) => void;
}

function register(config?: Config): void {
	if ("serviceWorker" in navigator) {
		window.addEventListener("load", async () => {
			const swUrl = "service-worker.js";

			try {
				const registration = await navigator.serviceWorker.register(swUrl);

				if (config && config.onSuccess) {
					config.onSuccess(registration);
				}
			} catch (error) {
				console.error(error);
			}
		});
	}
}

function unregister(): void {
	if ("serviceWorker" in navigator) {
		navigator.serviceWorker.ready.then((registration) => {
			registration.unregister();
		});
	}
}

export const serviceWorkerManager = {
	register,
	unregister,
};
