/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Review_VisitInputs */

const zh_friend_review_visit = /** @type {(inputs: Friend_Review_VisitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`访问网站`)
};

const en_friend_review_visit = /** @type {(inputs: Friend_Review_VisitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visit website`)
};

/**
* | output |
* | --- |
* | "Visit website" |
*
* @param {Friend_Review_VisitInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_review_visit = /** @type {((inputs?: Friend_Review_VisitInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Review_VisitInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_review_visit(inputs)
	return zh_friend_review_visit(inputs)
});