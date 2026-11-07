/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Apply_PendingInputs */

const zh_friend_apply_pending = /** @type {(inputs: Friend_Apply_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`申请已提交，等待审核`)
};

const en_friend_apply_pending = /** @type {(inputs: Friend_Apply_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Application awaiting review`)
};

/**
* | output |
* | --- |
* | "Application awaiting review" |
*
* @param {Friend_Apply_PendingInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_apply_pending = /** @type {((inputs?: Friend_Apply_PendingInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Apply_PendingInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_apply_pending(inputs)
	return zh_friend_apply_pending(inputs)
});