/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Error_Retry_FailedInputs */

const zh_error_retry_failed = /** @type {(inputs: Error_Retry_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`暂时仍无法加载，请稍后再试。`)
};

const en_error_retry_failed = /** @type {(inputs: Error_Retry_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Still unable to load this page. Please try again later.`)
};

/**
* | output |
* | --- |
* | "Still unable to load this page. Please try again later." |
*
* @param {Error_Retry_FailedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const error_retry_failed = /** @type {((inputs?: Error_Retry_FailedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Error_Retry_FailedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_error_retry_failed(inputs)
	return zh_error_retry_failed(inputs)
});