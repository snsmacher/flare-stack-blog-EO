/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Request_Error_Rate_Limited_TitleInputs */

const zh_request_error_rate_limited_title = /** @type {(inputs: Request_Error_Rate_Limited_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请求过于频繁`)
};

const en_request_error_rate_limited_title = /** @type {(inputs: Request_Error_Rate_Limited_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Too Many Requests`)
};

/**
* | output |
* | --- |
* | "Too Many Requests" |
*
* @param {Request_Error_Rate_Limited_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const request_error_rate_limited_title = /** @type {((inputs?: Request_Error_Rate_Limited_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Request_Error_Rate_Limited_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_request_error_rate_limited_title(inputs)
	return zh_request_error_rate_limited_title(inputs)
});