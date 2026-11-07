/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Login_Name_DescInputs */

const zh_login_name_desc = /** @type {(inputs: Login_Name_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`评论会显示这个昵称，之后可以在个人资料里修改。`)
};

const en_login_name_desc = /** @type {(inputs: Login_Name_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your nickname appears next to your comments. You can change it later in your profile.`)
};

/**
* | output |
* | --- |
* | "Your nickname appears next to your comments. You can change it later in your profile." |
*
* @param {Login_Name_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const login_name_desc = /** @type {((inputs?: Login_Name_DescInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Login_Name_DescInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_login_name_desc(inputs)
	return zh_login_name_desc(inputs)
});