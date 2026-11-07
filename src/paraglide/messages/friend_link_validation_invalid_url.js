/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Link_Validation_Invalid_UrlInputs */

const zh_friend_link_validation_invalid_url = /** @type {(inputs: Friend_Link_Validation_Invalid_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请输入有效的网站链接`)
};

const en_friend_link_validation_invalid_url = /** @type {(inputs: Friend_Link_Validation_Invalid_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Please enter a valid website link`)
};

/**
* | output |
* | --- |
* | "Please enter a valid website link" |
*
* @param {Friend_Link_Validation_Invalid_UrlInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_link_validation_invalid_url = /** @type {((inputs?: Friend_Link_Validation_Invalid_UrlInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Link_Validation_Invalid_UrlInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_link_validation_invalid_url(inputs)
	return zh_friend_link_validation_invalid_url(inputs)
});