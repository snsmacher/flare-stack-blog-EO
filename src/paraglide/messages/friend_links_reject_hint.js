/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Links_Reject_HintInputs */

const zh_friend_links_reject_hint = /** @type {(inputs: Friend_Links_Reject_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`理由可选。`)
};

const en_friend_links_reject_hint = /** @type {(inputs: Friend_Links_Reject_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reason is optional.`)
};

/**
* | output |
* | --- |
* | "Reason is optional." |
*
* @param {Friend_Links_Reject_HintInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_links_reject_hint = /** @type {((inputs?: Friend_Links_Reject_HintInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Links_Reject_HintInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_links_reject_hint(inputs)
	return zh_friend_links_reject_hint(inputs)
});