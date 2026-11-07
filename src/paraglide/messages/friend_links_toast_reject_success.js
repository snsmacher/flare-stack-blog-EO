/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Links_Toast_Reject_SuccessInputs */

const zh_friend_links_toast_reject_success = /** @type {(inputs: Friend_Links_Toast_Reject_SuccessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已拒绝该友链申请`)
};

const en_friend_links_toast_reject_success = /** @type {(inputs: Friend_Links_Toast_Reject_SuccessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Friend link rejected`)
};

/**
* | output |
* | --- |
* | "Friend link rejected" |
*
* @param {Friend_Links_Toast_Reject_SuccessInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_links_toast_reject_success = /** @type {((inputs?: Friend_Links_Toast_Reject_SuccessInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Links_Toast_Reject_SuccessInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_links_toast_reject_success(inputs)
	return zh_friend_links_toast_reject_success(inputs)
});