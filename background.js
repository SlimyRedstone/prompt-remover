const selectors = {
	google: 'button#L2AGLb',
	youtube: 'div.ytd-consent-bump-v2-lightbox.style-scope.eom-button-row button'
}

function removePrompt() {
	const current_url = new URL(location.href)
	const website = current_url.hostname.split('.')[1]
	if (selectors.hasKey(website)) {
		const button = document.querySelector(selectors[website])
		if (button != null) button.click()
	} else {
        console.error("Website is not recognized!")
	}
}

chrome.action.onClicked.addListener(async (_tab) => {
	chrome.scripting.executeScript({
		target: { tabId: _tab.id },
		// func: removePrompt
		files: ['back_page.js']
	})
})
