/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Friend_Links_Delete_MessageInputs */

const zh_friend_links_delete_message = /** @type {(inputs: Friend_Links_Delete_MessageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`「${i?.name}」的记录将被永久删除，无法恢复，申请人不会收到通知。`)
};

const en_friend_links_delete_message = /** @type {(inputs: Friend_Links_Delete_MessageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`The record of “${i?.name}” will be permanently deleted and cannot be restored. The applicant is not notified.`)
};

/**
* | output |
* | --- |
* | "The record of “{name}” will be permanently deleted and cannot be restored. The applicant is not notified." |
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