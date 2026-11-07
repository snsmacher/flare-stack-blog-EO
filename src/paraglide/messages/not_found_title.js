/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Not_Found_TitleInputs */

const zh_not_found_title = /** @type {(inputs: Not_Found_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`页面没有找到`)
};

const en_not_found_title = /** @type {(inputs: Not_Found_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Page not found`)
};

/**
* | output |
* | --- |
* | "Page not found" |
*
* @param {Not_Found_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const not_found_title = /** @type {((inputs?: Not_Found_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Not_Found_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_not_found_title(inputs)
	return zh_not_found_title(inputs)
});