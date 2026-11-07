/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Request_Error_Turnstile_Failed_DescInputs */

const zh_request_error_turnstile_failed_desc = /** @type {(inputs: Request_Error_Turnstile_Failed_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`安全验证未通过，请刷新页面后重试。`)
};

const en_request_error_turnstile_failed_desc = /** @type {(inputs: Request_Error_Turnstile_Failed_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Security verification failed. Please refresh the page and try again.`)
};

/**
* | output |
* | --- |
* | "Security verification failed. Please refresh the page and try again." |
*
* @param {Request_Error_Turnstile_Failed_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const request_error_turnstile_failed_desc = /** @type {((inputs?: Request_Error_Turnstile_Failed_DescInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Request_Error_Turnstile_Failed_DescInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_request_error_turnstile_failed_desc(inputs)
	return zh_request_error_turnstile_failed_desc(inputs)
});