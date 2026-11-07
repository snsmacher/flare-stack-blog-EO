/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Links_Action_RemoveInputs */

const zh_friend_links_action_remove = /** @type {(inputs: Friend_Links_Action_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`移出`)
};

const en_friend_links_action_remove = /** @type {(inputs: Friend_Links_Action_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remove`)
};

/**
* | output |
* | --- |
* | "Remove" |
*
* @param {Friend_Links_Action_RemoveInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_links_action_remove = /** @type {((inputs?: Friend_Links_Action_RemoveInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Links_Action_RemoveInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_links_action_remove(inputs)
	return zh_friend_links_action_remove(inputs)
});