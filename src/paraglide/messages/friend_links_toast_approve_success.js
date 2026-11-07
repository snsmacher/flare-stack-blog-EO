/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Links_Toast_Approve_SuccessInputs */

const zh_friend_links_toast_approve_success = /** @type {(inputs: Friend_Links_Toast_Approve_SuccessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已通过该友链申请`)
};

const en_friend_links_toast_approve_success = /** @type {(inputs: Friend_Links_Toast_Approve_SuccessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Friend link approved`)
};

/**
* | output |
* | --- |
* | "Friend link approved" |
*
* @param {Friend_Links_Toast_Approve_SuccessInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_links_toast_approve_success = /** @type {((inputs?: Friend_Links_Toast_Approve_SuccessInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Links_Toast_Approve_SuccessInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_links_toast_approve_success(inputs)
	return zh_friend_links_toast_approve_success(inputs)
});