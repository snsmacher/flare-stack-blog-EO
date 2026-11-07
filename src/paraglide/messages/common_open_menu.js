/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Open_MenuInputs */

const zh_common_open_menu = /** @type {(inputs: Common_Open_MenuInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`打开菜单`)
};

const en_common_open_menu = /** @type {(inputs: Common_Open_MenuInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open menu`)
};

/**
* | output |
* | --- |
* | "Open menu" |
*
* @param {Common_Open_MenuInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const common_open_menu = /** @type {((inputs?: Common_Open_MenuInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Open_MenuInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_common_open_menu(inputs)
	return zh_common_open_menu(inputs)
});