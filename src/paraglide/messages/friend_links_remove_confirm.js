/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Links_Remove_ConfirmInputs */

const zh_friend_links_remove_confirm = /** @type {(inputs: Friend_Links_Remove_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`移出`)
};

const en_friend_links_remove_confirm = /** @type {(inputs: Friend_Links_Remove_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remove`)
};

/**
* | output |
* | --- |
* | "Remove" |
*
* @param {Friend_Links_Remove_ConfirmInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_links_remove_confirm = /** @type {((inputs?: Friend_Links_Remove_ConfirmInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Links_Remove_ConfirmInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_links_remove_confirm(inputs)
	return zh_friend_links_remove_confirm(inputs)
});