/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Links_Empty_ApprovedInputs */

const zh_friend_links_empty_approved = /** @type {(inputs: Friend_Links_Empty_ApprovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`还没有友链`)
};

const en_friend_links_empty_approved = /** @type {(inputs: Friend_Links_Empty_ApprovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No friend links yet`)
};

/**
* | output |
* | --- |
* | "No friend links yet" |
*
* @param {Friend_Links_Empty_ApprovedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_links_empty_approved = /** @type {((inputs?: Friend_Links_Empty_ApprovedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Links_Empty_ApprovedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_links_empty_approved(inputs)
	return zh_friend_links_empty_approved(inputs)
});