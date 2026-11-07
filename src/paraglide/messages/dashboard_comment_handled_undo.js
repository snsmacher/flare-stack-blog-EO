/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Comment_Handled_UndoInputs */

const zh_dashboard_comment_handled_undo = /** @type {(inputs: Dashboard_Comment_Handled_UndoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`撤销`)
};

const en_dashboard_comment_handled_undo = /** @type {(inputs: Dashboard_Comment_Handled_UndoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Undo`)
};

/**
* | output |
* | --- |
* | "Undo" |
*
* @param {Dashboard_Comment_Handled_UndoInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const dashboard_comment_handled_undo = /** @type {((inputs?: Dashboard_Comment_Handled_UndoInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Comment_Handled_UndoInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_comment_handled_undo(inputs)
	return zh_dashboard_comment_handled_undo(inputs)
});