/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Request_Error_Turnstile_Missing_Token_DescInputs */

const zh_request_error_turnstile_missing_token_desc = /** @type {(inputs: Request_Error_Turnstile_Missing_Token_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请先完成安全验证后再试。`)
};

const en_request_error_turnstile_missing_token_desc = /** @type {(inputs: Request_Error_Turnstile_Missing_Token_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Please complete the security check before trying again.`)
};

/**
* | output |
* | --- |
* | "Please complete the security check before trying again." |
*
* @param {Request_Error_Turnstile_Missing_Token_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const request_error_turnstile_missing_token_desc = /** @type {((inputs?: Request_Error_Turnstile_Missing_Token_DescInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Request_Error_Turnstile_Missing_Token_DescInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_request_error_turnstile_missing_token_desc(inputs)
	return zh_request_error_turnstile_missing_token_desc(inputs)
});