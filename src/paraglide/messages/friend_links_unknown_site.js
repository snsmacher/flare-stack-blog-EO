/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Links_Unknown_SiteInputs */

const zh_friend_links_unknown_site = /** @type {(inputs: Friend_Links_Unknown_SiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`一个未知的神秘网站`)
};

const en_friend_links_unknown_site = /** @type {(inputs: Friend_Links_Unknown_SiteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A mysterious unknown site`)
};

/**
* | output |
* | --- |
* | "A mysterious unknown site" |
*
* @param {Friend_Links_Unknown_SiteInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_links_unknown_site = /** @type {((inputs?: Friend_Links_Unknown_SiteInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Links_Unknown_SiteInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_links_unknown_site(inputs)
	return zh_friend_links_unknown_site(inputs)
});