/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Turnstile_Error_Failed_DescInputs */

const zh_turnstile_error_failed_desc = /** @type {(inputs: Turnstile_Error_Failed_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请完成安全验证后再试`)
};

const en_turnstile_error_failed_desc = /** @type {(inputs: Turnstile_Error_Failed_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Please complete the security check before trying again.`)
};

/**
* | output |
* | --- |
* | "Please complete the security check before trying again." |
*
* @param {Turnstile_Error_Failed_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const turnstile_error_failed_desc = /** @type {((inputs?: Turnstile_Error_Failed_DescInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Turnstile_Error_Failed_DescInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_turnstile_error_failed_desc(inputs)
	return zh_turnstile_error_failed_desc(inputs)
});