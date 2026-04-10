// fade.js
export default function initFade() {
	const scrollEls = document.querySelectorAll('.partners__scroll')
	if (!scrollEls.length) return

	function updateFade(scrollEl) {
		const { scrollLeft, scrollWidth, clientWidth } = scrollEl

		const hasOverflow = scrollWidth > clientWidth

		// центрирование toggle
		scrollEl.classList.toggle('is-overflow', hasOverflow)

		// если нет overflow — убираем fade
		if (!hasOverflow) {
			scrollEl.classList.remove(
				'partners__scroll--left',
				'partners__scroll--right',
				'partners__scroll--both',
			)
			return
		}

		const canScrollLeft = scrollLeft > 0

		// 💡 фикс дергания на последнем пикселе
		const canScrollRight = Math.ceil(scrollLeft + clientWidth) < scrollWidth

		scrollEl.classList.remove(
			'partners__scroll--left',
			'partners__scroll--right',
			'partners__scroll--both',
		)

		if (canScrollLeft && canScrollRight) {
			scrollEl.classList.add('partners__scroll--both')
		} else if (canScrollLeft) {
			scrollEl.classList.add('partners__scroll--left')
		} else if (canScrollRight) {
			scrollEl.classList.add('partners__scroll--right')
		}
	}

	// 👉 один общий resize handler
	function handleResize() {
		scrollEls.forEach(scrollEl => updateFade(scrollEl))
	}

	scrollEls.forEach(scrollEl => {
		let ticking = false

		function handleScroll() {
			if (!ticking) {
				requestAnimationFrame(() => {
					updateFade(scrollEl)
					ticking = false
				})
				ticking = true
			}
		}

		// init
		updateFade(scrollEl)

		// scroll
		scrollEl.addEventListener('scroll', handleScroll)
	})

	// resize (один на все элементы)
	window.addEventListener('resize', () => {
		requestAnimationFrame(handleResize)
	})
}
