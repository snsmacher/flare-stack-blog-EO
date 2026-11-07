/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Links_Action_EditInputs */

const zh_friend_links_action_edit = /** @type {(inputs: Friend_Links_Action_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`编辑`)
};

const en_friend_links_action_edit = /** @type {(inputs: Friend_Links_Action_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edit`)
};

/**
* | output |
* | --- |
* | "Edit" |
*
* @param {Friend_Links_Action_EditInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_links_action_edit = /** @type {((inputs?: Friend_Links_Action_EditInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Links_Action_EditInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_links_action_edit(inputs)
	return zh_friend_links_action_edit(inputs)
});