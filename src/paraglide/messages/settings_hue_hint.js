/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Hue_HintInputs */

const zh_settings_hue_hint = /** @type {(inputs: Settings_Hue_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`滑动调整博客的主题强调色（用于按钮、链接与高亮等）`)
};

const en_settings_hue_hint = /** @type {(inputs: Settings_Hue_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adjust the blog theme accent color (used for buttons, links, and highlights)`)
};

/**
* | output |
* | --- |
* | "Adjust the blog theme accent color (used for buttons, links, and highlights)" |
*
* @param {Settings_Hue_HintInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_hue_hint = /** @type {((inputs?: Settings_Hue_HintInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Hue_HintInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_hue_hint(inputs)
	return zh_settings_hue_hint(inputs)
});