/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Review_ApplicantInputs */

const zh_friend_review_applicant = /** @type {(inputs: Friend_Review_ApplicantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`申请人`)
};

const en_friend_review_applicant = /** @type {(inputs: Friend_Review_ApplicantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Submitted by`)
};

/**
* | output |
* | --- |
* | "Submitted by" |
*
* @param {Friend_Review_ApplicantInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_review_applicant = /** @type {((inputs?: Friend_Review_ApplicantInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Review_ApplicantInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_review_applicant(inputs)
	return zh_friend_review_applicant(inputs)
});