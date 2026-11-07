/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Review_SearchInputs */

const zh_friend_review_search = /** @type {(inputs: Friend_Review_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搜索站点名称或域名`)
};

const en_friend_review_search = /** @type {(inputs: Friend_Review_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search sites or domains`)
};

/**
* | output |
* | --- |
* | "Search sites or domains" |
*
* @param {Friend_Review_SearchInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_review_search = /** @type {((inputs?: Friend_Review_SearchInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Review_SearchInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_review_search(inputs)
	return zh_friend_review_search(inputs)
});