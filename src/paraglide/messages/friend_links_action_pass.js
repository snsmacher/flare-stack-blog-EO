/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Links_Action_PassInputs */

const zh_friend_links_action_pass = /** @type {(inputs: Friend_Links_Action_PassInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通过`)
};

const en_friend_links_action_pass = /** @type {(inputs: Friend_Links_Action_PassInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Approve`)
};

/**
* | output |
* | --- |
* | "Approve" |
*
* @param {Friend_Links_Action_PassInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_links_action_pass = /** @type {((inputs?: Friend_Links_Action_PassInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Links_Action_PassInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_links_action_pass(inputs)
	return zh_friend_links_action_pass(inputs)
});