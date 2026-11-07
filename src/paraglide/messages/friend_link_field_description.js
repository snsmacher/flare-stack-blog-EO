/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Link_Field_DescriptionInputs */

const zh_friend_link_field_description = /** @type {(inputs: Friend_Link_Field_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`站点描述`)
};

const en_friend_link_field_description = /** @type {(inputs: Friend_Link_Field_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Description`)
};

/**
* | output |
* | --- |
* | "Description" |
*
* @param {Friend_Link_Field_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_link_field_description = /** @type {((inputs?: Friend_Link_Field_DescriptionInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Link_Field_DescriptionInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_link_field_description(inputs)
	return zh_friend_link_field_description(inputs)
});