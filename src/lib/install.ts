// "Install app" card on the home page.
// Chrome, Edge and Android fire `beforeinstallprompt` (captured in BaseLayout),
// which lets us open the native install dialog. Safari on iPhone/iPad has no
// such API, so there the button explains how to use "Add to Home Screen".

interface InstallPromptEvent extends Event {
	prompt(): Promise<void>;
	userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

declare global {
	interface Window {
		__installPrompt?: InstallPromptEvent;
	}
	interface Navigator {
		standalone?: boolean;
	}
}

const isInstalled = () =>
	window.matchMedia("(display-mode: standalone)").matches || navigator.standalone === true;

const isIos = () =>
	/iphone|ipad|ipod/i.test(navigator.userAgent) ||
	// iPadOS reports itself as a Mac.
	(navigator.userAgent.includes("Macintosh") && navigator.maxTouchPoints > 1);

export function setupInstallCard() {
	const card = document.getElementById("install-card");
	const button = document.getElementById("install-button");
	const iosHelp = document.getElementById("install-ios-help");
	if (!card || !button || !iosHelp || isInstalled()) return;

	const show = () => (card.hidden = false);
	const hide = () => (card.hidden = true);

	if (isIos()) {
		show();
		button.addEventListener("click", () => (iosHelp.hidden = !iosHelp.hidden));
		return;
	}

	if (window.__installPrompt) show();
	window.addEventListener("installprompt", show);
	window.addEventListener("appinstalled", hide);

	button.addEventListener("click", async () => {
		const prompt = window.__installPrompt;
		if (!prompt) return;
		await prompt.prompt();
		const { outcome } = await prompt.userChoice;
		// A prompt can only be used once; the browser fires a new one if allowed.
		window.__installPrompt = undefined;
		if (outcome === "accepted") hide();
	});
}
