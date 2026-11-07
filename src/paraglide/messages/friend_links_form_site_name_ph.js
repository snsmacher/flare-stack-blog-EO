/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Links_Form_Site_Name_PhInputs */

const zh_friend_links_form_site_name_ph = /** @type {(inputs: Friend_Links_Form_Site_Name_PhInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`例：我的博客`)
};

const en_friend_links_form_site_name_ph = /** @type {(inputs: Friend_Links_Form_Site_Name_PhInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`e.g. My Website`)
};

/**
* | output |
* | --- |
* | "e.g. My Website" |
*
* @param {Friend_Links_Form_Site_Name_PhInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_links_form_site_name_ph = /** @type {((inputs?: Friend_Links_Form_Site_Name_PhInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Links_Form_Site_Name_PhInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_links_form_site_name_ph(inputs)
	return zh_friend_links_form_site_name_ph(inputs)
});