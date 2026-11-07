/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Apply_RejectedInputs */

const zh_friend_apply_rejected = /** @type {(inputs: Friend_Apply_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`申请暂未通过`)
};

const en_friend_apply_rejected = /** @type {(inputs: Friend_Apply_RejectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Application not approved`)
};

/**
* | output |
* | --- |
* | "Application not approved" |
*
* @param {Friend_Apply_RejectedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_apply_rejected = /** @type {((inputs?: Friend_Apply_RejectedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Apply_RejectedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_apply_rejected(inputs)
	return zh_friend_apply_rejected(inputs)
});