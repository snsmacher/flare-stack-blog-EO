/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Links_Reject_Reason_PhInputs */

const zh_friend_links_reject_reason_ph = /** @type {(inputs: Friend_Links_Reject_Reason_PhInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`可选`)
};

const en_friend_links_reject_reason_ph = /** @type {(inputs: Friend_Links_Reject_Reason_PhInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Optional`)
};

/**
* | output |
* | --- |
* | "Optional" |
*
* @param {Friend_Links_Reject_Reason_PhInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_links_reject_reason_ph = /** @type {((inputs?: Friend_Links_Reject_Reason_PhInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Links_Reject_Reason_PhInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_links_reject_reason_ph(inputs)
	return zh_friend_links_reject_reason_ph(inputs)
});