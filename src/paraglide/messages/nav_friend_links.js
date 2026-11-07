/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Nav_Friend_LinksInputs */

const zh_nav_friend_links = /** @type {(inputs: Nav_Friend_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`友链`)
};

const en_nav_friend_links = /** @type {(inputs: Nav_Friend_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Links`)
};

/**
* | output |
* | --- |
* | "Links" |
*
* @param {Nav_Friend_LinksInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const nav_friend_links = /** @type {((inputs?: Nav_Friend_LinksInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Nav_Friend_LinksInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_nav_friend_links(inputs)
	return zh_nav_friend_links(inputs)
});