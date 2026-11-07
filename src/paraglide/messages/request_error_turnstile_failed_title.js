/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Request_Error_Turnstile_Failed_TitleInputs */

const zh_request_error_turnstile_failed_title = /** @type {(inputs: Request_Error_Turnstile_Failed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`安全验证未通过`)
};

const en_request_error_turnstile_failed_title = /** @type {(inputs: Request_Error_Turnstile_Failed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Security Check Failed`)
};

/**
* | output |
* | --- |
* | "Security Check Failed" |
*
* @param {Request_Error_Turnstile_Failed_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const request_error_turnstile_failed_title = /** @type {((inputs?: Request_Error_Turnstile_Failed_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Request_Error_Turnstile_Failed_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_request_error_turnstile_failed_title(inputs)
	return zh_request_error_turnstile_failed_title(inputs)
});