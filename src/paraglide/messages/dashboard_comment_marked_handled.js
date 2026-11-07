/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Comment_Marked_HandledInputs */

const zh_dashboard_comment_marked_handled = /** @type {(inputs: Dashboard_Comment_Marked_HandledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已标为已处理`)
};

const en_dashboard_comment_marked_handled = /** @type {(inputs: Dashboard_Comment_Marked_HandledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marked as handled`)
};

/**
* | output |
* | --- |
* | "Marked as handled" |
*
* @param {Dashboard_Comment_Marked_HandledInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const dashboard_comment_marked_handled = /** @type {((inputs?: Dashboard_Comment_Marked_HandledInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Comment_Marked_HandledInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_comment_marked_handled(inputs)
	return zh_dashboard_comment_marked_handled(inputs)
});