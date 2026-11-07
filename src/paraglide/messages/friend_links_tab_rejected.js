/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Links_Tab_RejectedInputs */

const zh_friend_links_tab_rejected = /** @type {(inputs: Friend_Links_Tab_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已拒绝`)
};

const en_friend_links_tab_rejected = /** @type {(inputs: Friend_Links_Tab_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rejected`)
};

/**
* | output |
* | --- |
* | "Rejected" |
*
* @param {Friend_Links_Tab_RejectedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_links_tab_rejected = /** @type {((inputs?: Friend_Links_Tab_RejectedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Links_Tab_RejectedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_links_tab_rejected(inputs)
	return zh_friend_links_tab_rejected(inputs)
});