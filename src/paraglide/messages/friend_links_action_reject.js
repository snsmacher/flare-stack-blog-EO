/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Links_Action_RejectInputs */

const zh_friend_links_action_reject = /** @type {(inputs: Friend_Links_Action_RejectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`拒绝`)
};

const en_friend_links_action_reject = /** @type {(inputs: Friend_Links_Action_RejectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reject`)
};

/**
* | output |
* | --- |
* | "Reject" |
*
* @param {Friend_Links_Action_RejectInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_links_action_reject = /** @type {((inputs?: Friend_Links_Action_RejectInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Links_Action_RejectInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_links_action_reject(inputs)
	return zh_friend_links_action_reject(inputs)
});