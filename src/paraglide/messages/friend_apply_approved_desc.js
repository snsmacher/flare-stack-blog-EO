/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Apply_Approved_DescInputs */

const zh_friend_apply_approved_desc = /** @type {(inputs: Friend_Apply_Approved_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`审核已通过，欢迎成为这里的新朋友。`)
};

const en_friend_apply_approved_desc = /** @type {(inputs: Friend_Apply_Approved_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your application was approved. Welcome!`)
};

/**
* | output |
* | --- |
* | "Your application was approved. Welcome!" |
*
* @param {Friend_Apply_Approved_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_apply_approved_desc = /** @type {((inputs?: Friend_Apply_Approved_DescInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Apply_Approved_DescInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_apply_approved_desc(inputs)
	return zh_friend_apply_approved_desc(inputs)
});