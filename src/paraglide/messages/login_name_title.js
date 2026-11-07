/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Login_Name_TitleInputs */

const zh_login_name_title = /** @type {(inputs: Login_Name_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`取个昵称吧`)
};

const en_login_name_title = /** @type {(inputs: Login_Name_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choose a nickname`)
};

/**
* | output |
* | --- |
* | "Choose a nickname" |
*
* @param {Login_Name_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const login_name_title = /** @type {((inputs?: Login_Name_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Login_Name_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_login_name_title(inputs)
	return zh_login_name_title(inputs)
});