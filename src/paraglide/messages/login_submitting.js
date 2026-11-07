/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Login_SubmittingInputs */

const zh_login_submitting = /** @type {(inputs: Login_SubmittingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`登录中...`)
};

const en_login_submitting = /** @type {(inputs: Login_SubmittingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signing in...`)
};

/**
* | output |
* | --- |
* | "Signing in..." |
*
* @param {Login_SubmittingInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const login_submitting = /** @type {((inputs?: Login_SubmittingInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Login_SubmittingInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_login_submitting(inputs)
	return zh_login_submitting(inputs)
});