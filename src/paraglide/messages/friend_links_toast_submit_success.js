/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Links_Toast_Submit_SuccessInputs */

const zh_friend_links_toast_submit_success = /** @type {(inputs: Friend_Links_Toast_Submit_SuccessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`申请已提交`)
};

const en_friend_links_toast_submit_success = /** @type {(inputs: Friend_Links_Toast_Submit_SuccessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Application submitted`)
};

/**
* | output |
* | --- |
* | "Application submitted" |
*
* @param {Friend_Links_Toast_Submit_SuccessInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_links_toast_submit_success = /** @type {((inputs?: Friend_Links_Toast_Submit_SuccessInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Links_Toast_Submit_SuccessInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_links_toast_submit_success(inputs)
	return zh_friend_links_toast_submit_success(inputs)
});