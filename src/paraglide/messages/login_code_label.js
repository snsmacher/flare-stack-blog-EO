/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Login_Code_LabelInputs */

const zh_login_code_label = /** @type {(inputs: Login_Code_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`验证码`)
};

const en_login_code_label = /** @type {(inputs: Login_Code_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sign-in code`)
};

/**
* | output |
* | --- |
* | "Sign-in code" |
*
* @param {Login_Code_LabelInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const login_code_label = /** @type {((inputs?: Login_Code_LabelInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Login_Code_LabelInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_login_code_label(inputs)
	return zh_login_code_label(inputs)
});