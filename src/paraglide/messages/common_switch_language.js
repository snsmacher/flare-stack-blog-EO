/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Switch_LanguageInputs */

const zh_common_switch_language = /** @type {(inputs: Common_Switch_LanguageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`切换语言`)
};

const en_common_switch_language = /** @type {(inputs: Common_Switch_LanguageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Switch language`)
};

/**
* | output |
* | --- |
* | "Switch language" |
*
* @param {Common_Switch_LanguageInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const common_switch_language = /** @type {((inputs?: Common_Switch_LanguageInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Switch_LanguageInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_common_switch_language(inputs)
	return zh_common_switch_language(inputs)
});