/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Link_Field_Site_Url_FuwariInputs */

const zh_friend_link_field_site_url_fuwari = /** @type {(inputs: Friend_Link_Field_Site_Url_FuwariInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`站点链接`)
};

const en_friend_link_field_site_url_fuwari = /** @type {(inputs: Friend_Link_Field_Site_Url_FuwariInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Site URL`)
};

/**
* | output |
* | --- |
* | "Site URL" |
*
* @param {Friend_Link_Field_Site_Url_FuwariInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_link_field_site_url_fuwari = /** @type {((inputs?: Friend_Link_Field_Site_Url_FuwariInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Link_Field_Site_Url_FuwariInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_link_field_site_url_fuwari(inputs)
	return zh_friend_link_field_site_url_fuwari(inputs)
});