/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Links_Field_LogoInputs */

const zh_friend_links_field_logo = /** @type {(inputs: Friend_Links_Field_LogoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logo 地址`)
};

const en_friend_links_field_logo = /** @type {(inputs: Friend_Links_Field_LogoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logo URL`)
};

/**
* | output |
* | --- |
* | "Logo URL" |
*
* @param {Friend_Links_Field_LogoInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_links_field_logo = /** @type {((inputs?: Friend_Links_Field_LogoInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Links_Field_LogoInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_links_field_logo(inputs)
	return zh_friend_links_field_logo(inputs)
});