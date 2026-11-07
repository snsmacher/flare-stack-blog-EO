/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Error_DescInputs */

const zh_error_desc = /** @type {(inputs: Error_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请稍后重试，或先返回首页。`)
};

const en_error_desc = /** @type {(inputs: Error_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Please try again, or return to the homepage.`)
};

/**
* | output |
* | --- |
* | "Please try again, or return to the homepage." |
*
* @param {Error_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const error_desc = /** @type {((inputs?: Error_DescInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Error_DescInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_error_desc(inputs)
	return zh_error_desc(inputs)
});