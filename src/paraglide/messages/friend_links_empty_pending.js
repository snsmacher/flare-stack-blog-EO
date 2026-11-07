/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Links_Empty_PendingInputs */

const zh_friend_links_empty_pending = /** @type {(inputs: Friend_Links_Empty_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有待审`)
};

const en_friend_links_empty_pending = /** @type {(inputs: Friend_Links_Empty_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nothing to review`)
};

/**
* | output |
* | --- |
* | "Nothing to review" |
*
* @param {Friend_Links_Empty_PendingInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_links_empty_pending = /** @type {((inputs?: Friend_Links_Empty_PendingInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Links_Empty_PendingInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_links_empty_pending(inputs)
	return zh_friend_links_empty_pending(inputs)
});