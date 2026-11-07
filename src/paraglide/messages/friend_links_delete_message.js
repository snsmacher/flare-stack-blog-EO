/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Friend_Links_Delete_MessageInputs */

const zh_friend_links_delete_message = /** @type {(inputs: Friend_Links_Delete_MessageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`删除「${i?.name}」`)
};

const en_friend_links_delete_message = /** @type {(inputs: Friend_Links_Delete_MessageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Delete “${i?.name}”`)
};

/**
* | output |
* | --- |
* | "Delete “{name}”" |
*
* @param {Friend_Links_Delete_MessageInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_links_delete_message = /** @type {((inputs: Friend_Links_Delete_MessageInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Links_Delete_MessageInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_links_delete_message(inputs)
	return zh_friend_links_delete_message(inputs)
});