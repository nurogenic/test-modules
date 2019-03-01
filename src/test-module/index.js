import View from './view'
import Model from './model'

/* We would need to add to the global scope as we do now with window.pix */
window.global = window.global || {}
window.global.TestModule = { View, Model }

export { View, Model }