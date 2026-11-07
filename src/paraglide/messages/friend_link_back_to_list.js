/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Link_Back_To_ListInputs */

const zh_friend_link_back_to_list = /** @type {(inputs: Friend_Link_Back_To_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`返回友情链接列表`)
};

const en_friend_link_back_to_list = /** @type {(inputs: Friend_Link_Back_To_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Back to friend links list`)
};

/**
* | output |
* | --- |
* | "Back to friend links list" |
*
* @param {Friend_Link_Back_To_ListInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_link_back_to_list = /** @type {((inputs?: Friend_Link_Back_To_ListInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Link_Back_To_ListInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_link_back_to_list(inputs)
	return zh_friend_link_back_to_list(inputs)
});