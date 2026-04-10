// Styles
import '@/styles/main.scss'

// Header height
import { setHeaderHeight } from './modules/header-height'

// Header Scroll
import { headerScroll } from './modules/header-scroll'

// Burger
import { burgerAction } from './modules/burger'

// Fade
import initFade from './modules/fade'

document.addEventListener('click', e => {
	burgerAction(e)
})

// Header height
setHeaderHeight()

// Header Scroll
headerScroll()

// Fade init
initFade()
