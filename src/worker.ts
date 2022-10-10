import { log } from "console";

let active = false;

chrome.runtime.onInstalled.addListener(() => {
	chrome.contextMenus.create({
		id: 'calendarMenu',
		title: 'Add to calendar',
		contexts: ['selection']
	});
	chrome.contextMenus.onClicked.addListener((info, tab) => {
		console.log(info.selectionText);
	});
});
