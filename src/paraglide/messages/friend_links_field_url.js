/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Links_Field_UrlInputs */

const zh_friend_links_field_url = /** @type {(inputs: Friend_Links_Field_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`站点地址`)
};

const en_friend_links_field_url = /** @type {(inputs: Friend_Links_Field_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Site URL`)
};

/**
* | output |
* | --- |
* | "Site URL" |
*
* @param {Friend_Links_Field_UrlInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_links_field_url = /** @type {((inputs?: Friend_Links_Field_UrlInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Links_Field_UrlInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_links_field_url(inputs)
	return zh_friend_links_field_url(inputs)
});