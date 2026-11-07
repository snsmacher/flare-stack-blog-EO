/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Comments_Toast_Name_RequiredInputs */

const zh_comments_toast_name_required = /** @type {(inputs: Comments_Toast_Name_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请先在个人资料中设置公开名称，再发表评论`)
};

const en_comments_toast_name_required = /** @type {(inputs: Comments_Toast_Name_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Set your public name in your profile before commenting.`)
};

/**
* | output |
* | --- |
* | "Set your public name in your profile before commenting." |
*
* @param {Comments_Toast_Name_RequiredInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const comments_toast_name_required = /** @type {((inputs?: Comments_Toast_Name_RequiredInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Comments_Toast_Name_RequiredInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_comments_toast_name_required(inputs)
	return zh_comments_toast_name_required(inputs)
});