/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Links_Field_DescInputs */

const zh_friend_links_field_desc = /** @type {(inputs: Friend_Links_Field_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`简介`)
};

const en_friend_links_field_desc = /** @type {(inputs: Friend_Links_Field_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Description`)
};

/**
* | output |
* | --- |
* | "Description" |
*
* @param {Friend_Links_Field_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_links_field_desc = /** @type {((inputs?: Friend_Links_Field_DescInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Links_Field_DescInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_links_field_desc(inputs)
	return zh_friend_links_field_desc(inputs)
});