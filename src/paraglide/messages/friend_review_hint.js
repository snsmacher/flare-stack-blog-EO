/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Review_HintInputs */

const zh_friend_review_hint = /** @type {(inputs: Friend_Review_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`查看申请，决定哪些站点出现在你的友链页`)
};

const en_friend_review_hint = /** @type {(inputs: Friend_Review_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Review submissions and choose the sites to feature.`)
};

/**
* | output |
* | --- |
* | "Review submissions and choose the sites to feature." |
*
* @param {Friend_Review_HintInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_review_hint = /** @type {((inputs?: Friend_Review_HintInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Review_HintInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_review_hint(inputs)
	return zh_friend_review_hint(inputs)
});