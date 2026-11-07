/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Links_TitleInputs */

const zh_friend_links_title = /** @type {(inputs: Friend_Links_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`友情链接`)
};

const en_friend_links_title = /** @type {(inputs: Friend_Links_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Links`)
};

/**
* | output |
* | --- |
* | "Links" |
*
* @param {Friend_Links_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_links_title = /** @type {((inputs?: Friend_Links_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Links_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_links_title(inputs)
	return zh_friend_links_title(inputs)
});