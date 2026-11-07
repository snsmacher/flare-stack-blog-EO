/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Links_Toast_Update_SuccessInputs */

const zh_friend_links_toast_update_success = /** @type {(inputs: Friend_Links_Toast_Update_SuccessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`友链更新成功`)
};

const en_friend_links_toast_update_success = /** @type {(inputs: Friend_Links_Toast_Update_SuccessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Friend link updated successfully`)
};

/**
* | output |
* | --- |
* | "Friend link updated successfully" |
*
* @param {Friend_Links_Toast_Update_SuccessInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_links_toast_update_success = /** @type {((inputs?: Friend_Links_Toast_Update_SuccessInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Links_Toast_Update_SuccessInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_links_toast_update_success(inputs)
	return zh_friend_links_toast_update_success(inputs)
});