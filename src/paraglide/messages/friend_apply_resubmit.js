/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Apply_ResubmitInputs */

const zh_friend_apply_resubmit = /** @type {(inputs: Friend_Apply_ResubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重新提交`)
};

const en_friend_apply_resubmit = /** @type {(inputs: Friend_Apply_ResubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Submit again`)
};

/**
* | output |
* | --- |
* | "Submit again" |
*
* @param {Friend_Apply_ResubmitInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_apply_resubmit = /** @type {((inputs?: Friend_Apply_ResubmitInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Apply_ResubmitInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_apply_resubmit(inputs)
	return zh_friend_apply_resubmit(inputs)
});