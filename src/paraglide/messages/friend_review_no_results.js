/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Review_No_ResultsInputs */

const zh_friend_review_no_results = /** @type {(inputs: Friend_Review_No_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有匹配的站点`)
};

const en_friend_review_no_results = /** @type {(inputs: Friend_Review_No_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No matching sites`)
};

/**
* | output |
* | --- |
* | "No matching sites" |
*
* @param {Friend_Review_No_ResultsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_review_no_results = /** @type {((inputs?: Friend_Review_No_ResultsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Review_No_ResultsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_review_no_results(inputs)
	return zh_friend_review_no_results(inputs)
});