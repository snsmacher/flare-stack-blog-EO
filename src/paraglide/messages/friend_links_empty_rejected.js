/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Links_Empty_RejectedInputs */

const zh_friend_links_empty_rejected = /** @type {(inputs: Friend_Links_Empty_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有已拒绝的`)
};

const en_friend_links_empty_rejected = /** @type {(inputs: Friend_Links_Empty_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nothing rejected`)
};

/**
* | output |
* | --- |
* | "Nothing rejected" |
*
* @param {Friend_Links_Empty_RejectedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_links_empty_rejected = /** @type {((inputs?: Friend_Links_Empty_RejectedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Links_Empty_RejectedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_links_empty_rejected(inputs)
	return zh_friend_links_empty_rejected(inputs)
});