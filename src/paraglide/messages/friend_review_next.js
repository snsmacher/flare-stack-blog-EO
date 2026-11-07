/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Review_NextInputs */

const zh_friend_review_next = /** @type {(inputs: Friend_Review_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下一条`)
};

const en_friend_review_next = /** @type {(inputs: Friend_Review_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Next`)
};

/**
* | output |
* | --- |
* | "Next" |
*
* @param {Friend_Review_NextInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_review_next = /** @type {((inputs?: Friend_Review_NextInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Review_NextInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_review_next(inputs)
	return zh_friend_review_next(inputs)
});