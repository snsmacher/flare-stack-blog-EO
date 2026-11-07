/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Apply_FailedInputs */

const zh_friend_apply_failed = /** @type {(inputs: Friend_Apply_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`提交未成功，填写内容已保留，请稍后重试。`)
};

const en_friend_apply_failed = /** @type {(inputs: Friend_Apply_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Submission failed. Your details are preserved; please try again.`)
};

/**
* | output |
* | --- |
* | "Submission failed. Your details are preserved; please try again." |
*
* @param {Friend_Apply_FailedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_apply_failed = /** @type {((inputs?: Friend_Apply_FailedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Apply_FailedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_apply_failed(inputs)
	return zh_friend_apply_failed(inputs)
});