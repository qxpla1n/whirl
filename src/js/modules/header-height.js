export function setHeaderHeight() {
	const header = document.querySelector('.header')
	if (!header) return

	let lastHeight = 0
	let frameId

	const update = () => {
		const newHeight = header.offsetHeight

		if (newHeight !== lastHeight) {
			lastHeight = newHeight
			document.documentElement.style.setProperty('--header-height', `${newHeight}px`)
		}

		frameId = requestAnimationFrame(update)
	}

	update()

	// если нужно остановить (например при destroy)
	return () => cancelAnimationFrame(frameId)
}
