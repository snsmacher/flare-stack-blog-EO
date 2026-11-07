/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Comment_Mark_HandledInputs */

const zh_dashboard_comment_mark_handled = /** @type {(inputs: Dashboard_Comment_Mark_HandledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`标为已处理`)
};

const en_dashboard_comment_mark_handled = /** @type {(inputs: Dashboard_Comment_Mark_HandledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mark as handled`)
};

/**
* | output |
* | --- |
* | "Mark as handled" |
*
* @param {Dashboard_Comment_Mark_HandledInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const dashboard_comment_mark_handled = /** @type {((inputs?: Dashboard_Comment_Mark_HandledInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Comment_Mark_HandledInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_comment_mark_handled(inputs)
	return zh_dashboard_comment_mark_handled(inputs)
});