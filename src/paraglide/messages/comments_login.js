/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Comments_LoginInputs */

const zh_comments_login = /** @type {(inputs: Comments_LoginInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`登录账号`)
};

const en_comments_login = /** @type {(inputs: Comments_LoginInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sign In`)
};

/**
* | output |
* | --- |
* | "Sign In" |
*
* @param {Comments_LoginInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const comments_login = /** @type {((inputs?: Comments_LoginInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Comments_LoginInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_comments_login(inputs)
	return zh_comments_login(inputs)
});