/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Apply_Load_FailedInputs */

const zh_friend_apply_load_failed = /** @type {(inputs: Friend_Apply_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`暂时无法读取申请状态，请重试。`)
};

const en_friend_apply_load_failed = /** @type {(inputs: Friend_Apply_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Could not load your application. Please try again.`)
};

/**
* | output |
* | --- |
* | "Could not load your application. Please try again." |
*
* @param {Friend_Apply_Load_FailedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_apply_load_failed = /** @type {((inputs?: Friend_Apply_Load_FailedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Apply_Load_FailedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_apply_load_failed(inputs)
	return zh_friend_apply_load_failed(inputs)
});