/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Apply_Name_RequiredInputs */

const zh_friend_apply_name_required = /** @type {(inputs: Friend_Apply_Name_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请先在个人资料中设置公开名称，再提交友链申请。`)
};

const en_friend_apply_name_required = /** @type {(inputs: Friend_Apply_Name_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Set your public name in your profile before submitting a friend link.`)
};

/**
* | output |
* | --- |
* | "Set your public name in your profile before submitting a friend link." |
*
* @param {Friend_Apply_Name_RequiredInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_apply_name_required = /** @type {((inputs?: Friend_Apply_Name_RequiredInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Apply_Name_RequiredInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_apply_name_required(inputs)
	return zh_friend_apply_name_required(inputs)
});