/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Error_RetryingInputs */

const zh_error_retrying = /** @type {(inputs: Error_RetryingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在重试…`)
};

const en_error_retrying = /** @type {(inputs: Error_RetryingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trying again…`)
};

/**
* | output |
* | --- |
* | "Trying again…" |
*
* @param {Error_RetryingInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const error_retrying = /** @type {((inputs?: Error_RetryingInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Error_RetryingInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_error_retrying(inputs)
	return zh_error_retrying(inputs)
});