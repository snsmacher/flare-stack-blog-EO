/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Links_Reject_ReasonInputs */

const zh_friend_links_reject_reason = /** @type {(inputs: Friend_Links_Reject_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`理由`)
};

const en_friend_links_reject_reason = /** @type {(inputs: Friend_Links_Reject_ReasonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reason`)
};

/**
* | output |
* | --- |
* | "Reason" |
*
* @param {Friend_Links_Reject_ReasonInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_links_reject_reason = /** @type {((inputs?: Friend_Links_Reject_ReasonInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Links_Reject_ReasonInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_links_reject_reason(inputs)
	return zh_friend_links_reject_reason(inputs)
});