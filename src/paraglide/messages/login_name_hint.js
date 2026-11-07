/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Login_Name_HintInputs */

const zh_login_name_hint = /** @type {(inputs: Login_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`2 到 20 个字符`)
};

const en_login_name_hint = /** @type {(inputs: Login_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`2 to 20 characters`)
};

/**
* | output |
* | --- |
* | "2 to 20 characters" |
*
* @param {Login_Name_HintInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const login_name_hint = /** @type {((inputs?: Login_Name_HintInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Login_Name_HintInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_login_name_hint(inputs)
	return zh_login_name_hint(inputs)
});