chrome.runtime.onMessage.addListener((request) => {
	if (request.act === openModalMessage) {
		console.log('trying to open modal');
		showMainModal(request.message);
	}
})
console.log('hello');
const openModalMessage = 'open-modal';


async function getTabInfo() {
	return new Promise((resolve, reject) => {
		chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
			if (tabs.length > 0) {
				resolve({title: tabs[0].title, url: tabs[0].url});
			} else {
				resolve(null);
			}
		});
	});
}

function showMainModal(message :string) {
	const modal = document.createElement("dialog");
	modal.setAttribute(
		"style",
		`
		height:450px;
		border: none;
		top:150px;
		border-radius:20px;
		background-color:white;
		position: fixed; box-shadow: 0px 12px 48px rgba(29, 5, 64, 0.32);
		`
	);
	modal.innerHTML = `<iframe id="popup-content"; style="height:100%"></iframe>
		<div style="position:absolute; top:0px; left:5px;">
		<button style="padding: 8px 12px; font-size: 16px; border: none; border-radius: 20px;">x</button>
		</div>`;
	document.body.appendChild(modal);
	const dialog = document.querySelector("dialog");
	if (dialog) {
		dialog.showModal();
		const iframe = document.getElementById("popup-content");
		if (iframe) {
			iframe.setAttribute("src", chrome.runtime.getURL("index.html"));
			iframe.setAttribute("frameBorder", "0");
			// dialog.querySelector("button")?.addEventListener("click", () => {
			// 	dialog.close();
			// });
		}
	}
}

const showModal = () => {
	const modal = document.createElement("dialog");
	modal.setAttribute(
		"style",
		`
		height:450px;
		border: none;
		top:150px;
		border-radius:20px;
		background-color:white;
		position: fixed; box-shadow: 0px 12px 48px rgba(29, 5, 64, 0.32);
		`
	);
	modal.innerHTML = `<iframe id="popup-content"; style="height:100%"></iframe>
		<div style="position:absolute; top:0px; left:5px;">
		<button style="padding: 8px 12px; font-size: 16px; border: none; border-radius: 20px;">x</button>
		</div>`;
	document.body.appendChild(modal);
	const dialog = document.querySelector("dialog");
	if (dialog) {
		dialog.showModal();
		const iframe = document.getElementById("popup-content");
		if (iframe) {
			iframe.setAttribute("src", chrome.runtime.getURL("index.html"));
			iframe.setAttribute("frameBorder", "0");
			// dialog.querySelector("button")?.addEventListener("click", () => {
			// 	dialog.close();
			// });
		}
	}
}
