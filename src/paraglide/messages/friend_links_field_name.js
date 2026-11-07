/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Links_Field_NameInputs */

const zh_friend_links_field_name = /** @type {(inputs: Friend_Links_Field_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`站点名称`)
};

const en_friend_links_field_name = /** @type {(inputs: Friend_Links_Field_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Site name`)
};

/**
* | output |
* | --- |
* | "Site name" |
*
* @param {Friend_Links_Field_NameInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_links_field_name = /** @type {((inputs?: Friend_Links_Field_NameInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Links_Field_NameInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_links_field_name(inputs)
	return zh_friend_links_field_name(inputs)
});