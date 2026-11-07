/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Link_Field_Site_NameInputs */

const zh_friend_link_field_site_name = /** @type {(inputs: Friend_Link_Field_Site_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`站点名称`)
};

const en_friend_link_field_site_name = /** @type {(inputs: Friend_Link_Field_Site_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Site Name`)
};

/**
* | output |
* | --- |
* | "Site Name" |
*
* @param {Friend_Link_Field_Site_NameInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_link_field_site_name = /** @type {((inputs?: Friend_Link_Field_Site_NameInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Link_Field_Site_NameInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_link_field_site_name(inputs)
	return zh_friend_link_field_site_name(inputs)
});