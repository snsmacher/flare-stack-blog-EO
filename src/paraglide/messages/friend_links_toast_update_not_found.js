/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Links_Toast_Update_Not_FoundInputs */

const zh_friend_links_toast_update_not_found = /** @type {(inputs: Friend_Links_Toast_Update_Not_FoundInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更新失败：未找到对应的友链记录`)
};

const en_friend_links_toast_update_not_found = /** @type {(inputs: Friend_Links_Toast_Update_Not_FoundInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Update failed: Friend link not found`)
};

/**
* | output |
* | --- |
* | "Update failed: Friend link not found" |
*
* @param {Friend_Links_Toast_Update_Not_FoundInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_links_toast_update_not_found = /** @type {((inputs?: Friend_Links_Toast_Update_Not_FoundInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Links_Toast_Update_Not_FoundInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_links_toast_update_not_found(inputs)
	return zh_friend_links_toast_update_not_found(inputs)
});