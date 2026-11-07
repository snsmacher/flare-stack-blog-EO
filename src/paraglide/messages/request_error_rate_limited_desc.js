/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ seconds: NonNullable<unknown> }} Request_Error_Rate_Limited_DescInputs */

const zh_request_error_rate_limited_desc = /** @type {(inputs: Request_Error_Rate_Limited_DescInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`请在 ${i?.seconds} 秒后重试。`)
};

const en_request_error_rate_limited_desc = /** @type {(inputs: Request_Error_Rate_Limited_DescInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Please try again in ${i?.seconds} seconds.`)
};

/**
* | seconds | output |
* | --- | --- |
* | * | "Please try again in {seconds} seconds." |
*
* @param {Request_Error_Rate_Limited_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const request_error_rate_limited_desc = /** @type {((inputs: Request_Error_Rate_Limited_DescInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Request_Error_Rate_Limited_DescInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_request_error_rate_limited_desc(inputs)
	return zh_request_error_rate_limited_desc(inputs)
});