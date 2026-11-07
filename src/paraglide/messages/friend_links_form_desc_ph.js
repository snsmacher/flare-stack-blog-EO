/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Links_Form_Desc_PhInputs */

const zh_friend_links_form_desc_ph = /** @type {(inputs: Friend_Links_Form_Desc_PhInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`简要介绍该站点`)
};

const en_friend_links_form_desc_ph = /** @type {(inputs: Friend_Links_Form_Desc_PhInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A brief description`)
};

/**
* | output |
* | --- |
* | "A brief description" |
*
* @param {Friend_Links_Form_Desc_PhInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_links_form_desc_ph = /** @type {((inputs?: Friend_Links_Form_Desc_PhInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Links_Form_Desc_PhInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_links_form_desc_ph(inputs)
	return zh_friend_links_form_desc_ph(inputs)
});