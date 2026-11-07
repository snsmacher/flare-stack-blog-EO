/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Links_Fuwari_No_LinksInputs */

const zh_friend_links_fuwari_no_links = /** @type {(inputs: Friend_Links_Fuwari_No_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`还没有添加友情链接`)
};

const en_friend_links_fuwari_no_links = /** @type {(inputs: Friend_Links_Fuwari_No_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No friend links yet`)
};

/**
* | output |
* | --- |
* | "No friend links yet" |
*
* @param {Friend_Links_Fuwari_No_LinksInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_links_fuwari_no_links = /** @type {((inputs?: Friend_Links_Fuwari_No_LinksInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Links_Fuwari_No_LinksInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_links_fuwari_no_links(inputs)
	return zh_friend_links_fuwari_no_links(inputs)
});