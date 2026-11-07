/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Link_Placeholder_Description_FuwariInputs */

const zh_friend_link_placeholder_description_fuwari = /** @type {(inputs: Friend_Link_Placeholder_Description_FuwariInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`一句话介绍你的网站`)
};

const en_friend_link_placeholder_description_fuwari = /** @type {(inputs: Friend_Link_Placeholder_Description_FuwariInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A short introduction to your site`)
};

/**
* | output |
* | --- |
* | "A short introduction to your site" |
*
* @param {Friend_Link_Placeholder_Description_FuwariInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_link_placeholder_description_fuwari = /** @type {((inputs?: Friend_Link_Placeholder_Description_FuwariInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Link_Placeholder_Description_FuwariInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_link_placeholder_description_fuwari(inputs)
	return zh_friend_link_placeholder_description_fuwari(inputs)
});