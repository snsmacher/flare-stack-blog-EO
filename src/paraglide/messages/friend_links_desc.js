/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Links_DescInputs */

const zh_friend_links_desc = /** @type {(inputs: Friend_Links_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`志同道合的站点，彼此链接，互相照亮。`)
};

const en_friend_links_desc = /** @type {(inputs: Friend_Links_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Like-minded sites, linking each other, lighting each other up.`)
};

/**
* | output |
* | --- |
* | "Like-minded sites, linking each other, lighting each other up." |
*
* @param {Friend_Links_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_links_desc = /** @type {((inputs?: Friend_Links_DescInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Links_DescInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_links_desc(inputs)
	return zh_friend_links_desc(inputs)
});