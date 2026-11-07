/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Links_Tab_PendingInputs */

const zh_friend_links_tab_pending = /** @type {(inputs: Friend_Links_Tab_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`待审核`)
};

const en_friend_links_tab_pending = /** @type {(inputs: Friend_Links_Tab_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pending`)
};

/**
* | output |
* | --- |
* | "Pending" |
*
* @param {Friend_Links_Tab_PendingInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_links_tab_pending = /** @type {((inputs?: Friend_Links_Tab_PendingInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Links_Tab_PendingInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_links_tab_pending(inputs)
	return zh_friend_links_tab_pending(inputs)
});