/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Review_No_DescriptionInputs */

const zh_friend_review_no_description = /** @type {(inputs: Friend_Review_No_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`暂未填写简介`)
};

const en_friend_review_no_description = /** @type {(inputs: Friend_Review_No_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No description provided`)
};

/**
* | output |
* | --- |
* | "No description provided" |
*
* @param {Friend_Review_No_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_review_no_description = /** @type {((inputs?: Friend_Review_No_DescriptionInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Review_No_DescriptionInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_review_no_description(inputs)
	return zh_friend_review_no_description(inputs)
});