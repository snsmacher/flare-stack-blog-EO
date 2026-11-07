/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Layout_Back_HomeInputs */

const zh_auth_layout_back_home = /** @type {(inputs: Auth_Layout_Back_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`返回首页`)
};

const en_auth_layout_back_home = /** @type {(inputs: Auth_Layout_Back_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Back to Home`)
};

/**
* | output |
* | --- |
* | "Back to Home" |
*
* @param {Auth_Layout_Back_HomeInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const auth_layout_back_home = /** @type {((inputs?: Auth_Layout_Back_HomeInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Layout_Back_HomeInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_auth_layout_back_home(inputs)
	return zh_auth_layout_back_home(inputs)
});