/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Links_Toast_Reject_Not_FoundInputs */

const zh_friend_links_toast_reject_not_found = /** @type {(inputs: Friend_Links_Toast_Reject_Not_FoundInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`操作失败：未找到对应的友链记录`)
};

const en_friend_links_toast_reject_not_found = /** @type {(inputs: Friend_Links_Toast_Reject_Not_FoundInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Action failed: Friend link not found`)
};

/**
* | output |
* | --- |
* | "Action failed: Friend link not found" |
*
* @param {Friend_Links_Toast_Reject_Not_FoundInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_links_toast_reject_not_found = /** @type {((inputs?: Friend_Links_Toast_Reject_Not_FoundInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Links_Toast_Reject_Not_FoundInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_links_toast_reject_not_found(inputs)
	return zh_friend_links_toast_reject_not_found(inputs)
});