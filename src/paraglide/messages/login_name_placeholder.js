/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Login_Name_PlaceholderInputs */

const zh_login_name_placeholder = /** @type {(inputs: Login_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你想被怎么称呼？`)
};

const en_login_name_placeholder = /** @type {(inputs: Login_Name_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What should we call you?`)
};

/**
* | output |
* | --- |
* | "What should we call you?" |
*
* @param {Login_Name_PlaceholderInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const login_name_placeholder = /** @type {((inputs?: Login_Name_PlaceholderInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Login_Name_PlaceholderInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_login_name_placeholder(inputs)
	return zh_login_name_placeholder(inputs)
});