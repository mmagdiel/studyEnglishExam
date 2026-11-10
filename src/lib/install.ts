// "Install app" card on the home page.
// Shown only on phones and tablets, only in a normal browser tab, and never
// inside the installed app.
// - Android (Chrome, Edge, Samsung…) fires `beforeinstallprompt` (captured in
//   BaseLayout) only while the app isn't installed, so the button opens the
//   native install dialog and the card stays hidden once installed.
// - iPhone/iPad has no install API and can't tell a page the app is installed,
//   so the card explains "Add to Home Screen" and offers "Don't show again".

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
		userAgentData?: { mobile: boolean };
	}
}

const DISMISSED_KEY = "grammar-master:install-dismissed";

/** True inside the installed app (home-screen icon), false in a browser tab. */
const isInstalledApp = () =>
	["standalone", "fullscreen", "minimal-ui"].some(
		(mode) => window.matchMedia(`(display-mode: ${mode})`).matches,
	) || navigator.standalone === true;

const isIos = () =>
	/iphone|ipad|ipod/i.test(navigator.userAgent) ||
	// iPadOS reports itself as a Mac.
	(navigator.userAgent.includes("Macintosh") && navigator.maxTouchPoints > 1);

const isMobile = () =>
	isIos() ||
	navigator.userAgentData?.mobile === true ||
	/android|mobile/i.test(navigator.userAgent);

function wasDismissed() {
	try {
		return window.localStorage.getItem(DISMISSED_KEY) === "1";
	} catch {
		return false;
	}
}

function rememberDismissed() {
	try {
		window.localStorage.setItem(DISMISSED_KEY, "1");
	} catch {
		// Storage blocked: the card just comes back next visit.
	}
}

export function setupInstallCard() {
	const card = document.getElementById("install-card");
	const button = document.getElementById("install-button");
	const iosHelp = document.getElementById("install-ios-help");
	const dismiss = document.getElementById("install-dismiss");
	if (!card || !button || !iosHelp || !dismiss) return;
	if (!isMobile() || isInstalledApp()) return;

	const show = () => (card.hidden = false);
	const hide = () => (card.hidden = true);

	if (isIos()) {
		if (wasDismissed()) return;
		show();
		button.addEventListener("click", () => (iosHelp.hidden = !iosHelp.hidden));
		dismiss.hidden = false;
		dismiss.addEventListener("click", () => {
			rememberDismissed();
			hide();
		});
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
