/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Review_PreviewInputs */

const zh_friend_review_preview = /** @type {(inputs: Friend_Review_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公开展示预览`)
};

const en_friend_review_preview = /** @type {(inputs: Friend_Review_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Public display preview`)
};

/**
* | output |
* | --- |
* | "Public display preview" |
*
* @param {Friend_Review_PreviewInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_review_preview = /** @type {((inputs?: Friend_Review_PreviewInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Review_PreviewInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_review_preview(inputs)
	return zh_friend_review_preview(inputs)
});