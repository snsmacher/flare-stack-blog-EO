/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ theme: NonNullable<unknown> }} Theme_Toggle_TitleInputs */

const zh_theme_toggle_title = /** @type {(inputs: Theme_Toggle_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`主题：${i?.theme}`)
};

const en_theme_toggle_title = /** @type {(inputs: Theme_Toggle_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Theme: ${i?.theme}`)
};

/**
* | output |
* | --- |
* | "Theme: {theme}" |
*
* @param {Theme_Toggle_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const theme_toggle_title = /** @type {((inputs: Theme_Toggle_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Theme_Toggle_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_theme_toggle_title(inputs)
	return zh_theme_toggle_title(inputs)
});