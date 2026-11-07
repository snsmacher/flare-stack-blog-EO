/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Apply_After_SubmitInputs */

const zh_friend_apply_after_submit = /** @type {(inputs: Friend_Apply_After_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`提交后可在此查看审核结果。`)
};

const en_friend_apply_after_submit = /** @type {(inputs: Friend_Apply_After_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Return here to check your application after submitting.`)
};

/**
* | output |
* | --- |
* | "Return here to check your application after submitting." |
*
* @param {Friend_Apply_After_SubmitInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_apply_after_submit = /** @type {((inputs?: Friend_Apply_After_SubmitInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Apply_After_SubmitInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_apply_after_submit(inputs)
	return zh_friend_apply_after_submit(inputs)
});