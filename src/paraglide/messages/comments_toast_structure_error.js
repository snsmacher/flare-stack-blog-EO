/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Comments_Toast_Structure_ErrorInputs */

const zh_comments_toast_structure_error = /** @type {(inputs: Comments_Toast_Structure_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`评论结构异常，请刷新页面重试`)
};

const en_comments_toast_structure_error = /** @type {(inputs: Comments_Toast_Structure_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comment structure anomaly, please refresh`)
};

/**
* | output |
* | --- |
* | "Comment structure anomaly, please refresh" |
*
* @param {Comments_Toast_Structure_ErrorInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const comments_toast_structure_error = /** @type {((inputs?: Comments_Toast_Structure_ErrorInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Comments_Toast_Structure_ErrorInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_comments_toast_structure_error(inputs)
	return zh_comments_toast_structure_error(inputs)
});