/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Error_RetryInputs */

const zh_error_retry = /** @type {(inputs: Error_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重新尝试`)
};

const en_error_retry = /** @type {(inputs: Error_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Try again`)
};

/**
* | output |
* | --- |
* | "Try again" |
*
* @param {Error_RetryInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const error_retry = /** @type {((inputs?: Error_RetryInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Error_RetryInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_error_retry(inputs)
	return zh_error_retry(inputs)
});