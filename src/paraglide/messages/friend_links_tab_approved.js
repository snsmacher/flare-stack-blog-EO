/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Links_Tab_ApprovedInputs */

const zh_friend_links_tab_approved = /** @type {(inputs: Friend_Links_Tab_ApprovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已通过`)
};

const en_friend_links_tab_approved = /** @type {(inputs: Friend_Links_Tab_ApprovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Approved`)
};

/**
* | output |
* | --- |
* | "Approved" |
*
* @param {Friend_Links_Tab_ApprovedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_links_tab_approved = /** @type {((inputs?: Friend_Links_Tab_ApprovedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Links_Tab_ApprovedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_links_tab_approved(inputs)
	return zh_friend_links_tab_approved(inputs)
});