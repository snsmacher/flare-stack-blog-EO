/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Comments_Turnstile_RequiredInputs */

const zh_comments_turnstile_required = /** @type {(inputs: Comments_Turnstile_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请先完成安全验证`)
};

const en_comments_turnstile_required = /** @type {(inputs: Comments_Turnstile_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Please complete the security check first`)
};

/**
* | output |
* | --- |
* | "Please complete the security check first" |
*
* @param {Comments_Turnstile_RequiredInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const comments_turnstile_required = /** @type {((inputs?: Comments_Turnstile_RequiredInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Comments_Turnstile_RequiredInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_comments_turnstile_required(inputs)
	return zh_comments_turnstile_required(inputs)
});