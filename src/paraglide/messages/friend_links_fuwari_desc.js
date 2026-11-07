/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Links_Fuwari_DescInputs */

const zh_friend_links_fuwari_desc = /** @type {(inputs: Friend_Links_Fuwari_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`发现一些认真记录生活的人。`)
};

const en_friend_links_fuwari_desc = /** @type {(inputs: Friend_Links_Fuwari_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A few friends worth visiting.`)
};

/**
* | output |
* | --- |
* | "A few friends worth visiting." |
*
* @param {Friend_Links_Fuwari_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_links_fuwari_desc = /** @type {((inputs?: Friend_Links_Fuwari_DescInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Links_Fuwari_DescInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_links_fuwari_desc(inputs)
	return zh_friend_links_fuwari_desc(inputs)
});