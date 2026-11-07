/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Review_Preview_HintInputs */

const zh_friend_review_preview_hint = /** @type {(inputs: Friend_Review_Preview_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通过后将以这些资料展示在前台友链页`)
};

const en_friend_review_preview_hint = /** @type {(inputs: Friend_Review_Preview_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Once approved, these details appear on your friend links page.`)
};

/**
* | output |
* | --- |
* | "Once approved, these details appear on your friend links page." |
*
* @param {Friend_Review_Preview_HintInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_review_preview_hint = /** @type {((inputs?: Friend_Review_Preview_HintInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Review_Preview_HintInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_review_preview_hint(inputs)
	return zh_friend_review_preview_hint(inputs)
});