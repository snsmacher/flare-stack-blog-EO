/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Review_QueueInputs */

const zh_friend_review_queue = /** @type {(inputs: Friend_Review_QueueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`申请列表`)
};

const en_friend_review_queue = /** @type {(inputs: Friend_Review_QueueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Submissions`)
};

/**
* | output |
* | --- |
* | "Submissions" |
*
* @param {Friend_Review_QueueInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_review_queue = /** @type {((inputs?: Friend_Review_QueueInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Review_QueueInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_review_queue(inputs)
	return zh_friend_review_queue(inputs)
});