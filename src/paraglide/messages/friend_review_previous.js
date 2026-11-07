/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Review_PreviousInputs */

const zh_friend_review_previous = /** @type {(inputs: Friend_Review_PreviousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上一条`)
};

const en_friend_review_previous = /** @type {(inputs: Friend_Review_PreviousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Previous`)
};

/**
* | output |
* | --- |
* | "Previous" |
*
* @param {Friend_Review_PreviousInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_review_previous = /** @type {((inputs?: Friend_Review_PreviousInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Review_PreviousInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_review_previous(inputs)
	return zh_friend_review_previous(inputs)
});