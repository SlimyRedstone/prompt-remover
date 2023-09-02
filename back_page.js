window.onload = function () {
	var loop_times = 0
	var kill_loop = false
	var interval = undefined

	const selectors = {
		google: 'button#L2AGLb',
		youtube: 'div.ytd-consent-bump-v2-lightbox.style-scope.eom-button-row button'
	}
	const current_url = new URL(location.href)
	const website = current_url.hostname.split('.')[1]
	console.log(`%cPrompt Remover injected in ${website}! `, 'color:black;background-color:lime;font-size:larger')

	function removePrompt() {
		if (selectors.hasOwnProperty(website)) {
			const button = document.querySelector(selectors[website])
			if (button != null) {
				button.click()
				if (website == 'youtube') document.querySelector('tp-yt-paper-dialog#dialog[style-target="host"]').remove()
				console.log('All prompts have been cleared !')
			} else {
				// clearInterval(interval)
			}
			if (loop_times++ >= 30) clearInterval(interval)
		} else {
			console.error('Website is not recognized!')
			clearInterval(interval)
		}
	}
	interval = setInterval(removePrompt, 500)
}
