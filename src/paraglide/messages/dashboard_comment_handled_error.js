/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Comment_Handled_ErrorInputs */

const zh_dashboard_comment_handled_error = /** @type {(inputs: Dashboard_Comment_Handled_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`操作失败，请重试`)
};

const en_dashboard_comment_handled_error = /** @type {(inputs: Dashboard_Comment_Handled_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn't update the comment. Try again.`)
};

/**
* | output |
* | --- |
* | "Couldn't update the comment. Try again." |
*
* @param {Dashboard_Comment_Handled_ErrorInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const dashboard_comment_handled_error = /** @type {((inputs?: Dashboard_Comment_Handled_ErrorInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Comment_Handled_ErrorInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_comment_handled_error(inputs)
	return zh_dashboard_comment_handled_error(inputs)
});