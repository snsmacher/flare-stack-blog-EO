/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Error_TitleInputs */

const zh_error_title = /** @type {(inputs: Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`页面暂时无法加载`)
};

const en_error_title = /** @type {(inputs: Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Page temporarily unavailable`)
};

/**
* | output |
* | --- |
* | "Page temporarily unavailable" |
*
* @param {Error_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const error_title = /** @type {((inputs?: Error_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Error_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_error_title(inputs)
	return zh_error_title(inputs)
});