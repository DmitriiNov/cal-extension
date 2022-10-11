function OpenPopup (message :string) {
	chrome.tabs.query(
		{ active: true, currentWindow: true },
		(tabs) => {
			const tab = tabs[0];
			if (tab) {
				chrome.tabs.sendMessage(tab.id || 0, {act: 'open-modal', message: message});
			}
		}
	);
}

chrome.runtime.onInstalled.addListener(() => {
	chrome.contextMenus.create({
		id: 'calendarMenu',
		title: 'Add to calendar',
		contexts: ['selection']
	});
	chrome.contextMenus.onClicked.addListener((info, tab) => {
		if (info.menuItemId === 'calendarMenu') {
			OpenPopup(info.selectionText || '');
		}
	});
});

chrome.action.onClicked.addListener(function (tab) {
	OpenPopup('');
});