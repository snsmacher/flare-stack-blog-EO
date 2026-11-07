/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Link_Placeholder_Site_Name_FuwariInputs */

const zh_friend_link_placeholder_site_name_fuwari = /** @type {(inputs: Friend_Link_Placeholder_Site_Name_FuwariInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`例如：某某的小站`)
};

const en_friend_link_placeholder_site_name_fuwari = /** @type {(inputs: Friend_Link_Placeholder_Site_Name_FuwariInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`e.g. Someone's Blog`)
};

/**
* | output |
* | --- |
* | "e.g. Someone's Blog" |
*
* @param {Friend_Link_Placeholder_Site_Name_FuwariInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_link_placeholder_site_name_fuwari = /** @type {((inputs?: Friend_Link_Placeholder_Site_Name_FuwariInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Link_Placeholder_Site_Name_FuwariInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_link_placeholder_site_name_fuwari(inputs)
	return zh_friend_link_placeholder_site_name_fuwari(inputs)
});