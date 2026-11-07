/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Nav_Drag_HintInputs */

const zh_settings_nav_drag_hint = /** @type {(inputs: Settings_Nav_Drag_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`拖动左侧手柄排序，也可聚焦手柄后使用上下方向键。`)
};

const en_settings_nav_drag_hint = /** @type {(inputs: Settings_Nav_Drag_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Drag the handle to reorder, or focus it and use the up/down arrow keys.`)
};

/**
* | output |
* | --- |
* | "Drag the handle to reorder, or focus it and use the up/down arrow keys." |
*
* @param {Settings_Nav_Drag_HintInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_nav_drag_hint = /** @type {((inputs?: Settings_Nav_Drag_HintInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Nav_Drag_HintInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_nav_drag_hint(inputs)
	return zh_settings_nav_drag_hint(inputs)
});