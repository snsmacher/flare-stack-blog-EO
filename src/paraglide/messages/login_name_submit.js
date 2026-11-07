/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Login_Name_SubmitInputs */

const zh_login_name_submit = /** @type {(inputs: Login_Name_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`继续`)
};

const en_login_name_submit = /** @type {(inputs: Login_Name_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Continue`)
};

/**
* | output |
* | --- |
* | "Continue" |
*
* @param {Login_Name_SubmitInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const login_name_submit = /** @type {((inputs?: Login_Name_SubmitInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Login_Name_SubmitInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_login_name_submit(inputs)
	return zh_login_name_submit(inputs)
});