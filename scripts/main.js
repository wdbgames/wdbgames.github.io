function load() {
	const JS = localStorage.getItem("JS");
	const defaultJS = "scripts/js/default.js";
	function load(src, error) {
		const script = document.createElement("script");
		script.src = src;
		script.onload = () => {};
		script.onerror = error;
		document.body.appendChild(script);
	}
	if (JS && JS.trim()) {
		load(JS, () => load(defaultJS, () => {}));
	} else {
		load(defaultJS, () => {});
	}
}
document.addEventListener("DOMContentLoaded", load);
