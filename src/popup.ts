chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    console.log(tabs[0])
	console.log(tabs[0].title);
	const nameField = document.getElementById('nameField');
	if (nameField)
		nameField.setAttribute('value', tabs[0].title || '');
	const descField = document.getElementById('descriptionField');
	if (descField)
		descField.innerHTML = tabs[0].url || '';
});