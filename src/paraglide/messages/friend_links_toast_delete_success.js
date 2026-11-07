/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Links_Toast_Delete_SuccessInputs */

const zh_friend_links_toast_delete_success = /** @type {(inputs: Friend_Links_Toast_Delete_SuccessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`友链已删除`)
};

const en_friend_links_toast_delete_success = /** @type {(inputs: Friend_Links_Toast_Delete_SuccessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Friend link deleted`)
};

/**
* | output |
* | --- |
* | "Friend link deleted" |
*
* @param {Friend_Links_Toast_Delete_SuccessInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_links_toast_delete_success = /** @type {((inputs?: Friend_Links_Toast_Delete_SuccessInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Links_Toast_Delete_SuccessInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_links_toast_delete_success(inputs)
	return zh_friend_links_toast_delete_success(inputs)
});