/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Link_Field_Logo_UrlInputs */

const zh_friend_link_field_logo_url = /** @type {(inputs: Friend_Link_Field_Logo_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logo 链接`)
};

const en_friend_link_field_logo_url = /** @type {(inputs: Friend_Link_Field_Logo_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logo URL`)
};

/**
* | output |
* | --- |
* | "Logo URL" |
*
* @param {Friend_Link_Field_Logo_UrlInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_link_field_logo_url = /** @type {((inputs?: Friend_Link_Field_Logo_UrlInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Link_Field_Logo_UrlInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_link_field_logo_url(inputs)
	return zh_friend_link_field_logo_url(inputs)
});