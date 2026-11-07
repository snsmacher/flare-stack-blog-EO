/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Links_Fuwari_ApplyInputs */

const zh_friend_links_fuwari_apply = /** @type {(inputs: Friend_Links_Fuwari_ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`申请友链`)
};

const en_friend_links_fuwari_apply = /** @type {(inputs: Friend_Links_Fuwari_ApplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apply`)
};

/**
* | output |
* | --- |
* | "Apply" |
*
* @param {Friend_Links_Fuwari_ApplyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_links_fuwari_apply = /** @type {((inputs?: Friend_Links_Fuwari_ApplyInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Links_Fuwari_ApplyInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_links_fuwari_apply(inputs)
	return zh_friend_links_fuwari_apply(inputs)
});