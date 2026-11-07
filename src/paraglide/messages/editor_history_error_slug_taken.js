/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_History_Error_Slug_TakenInputs */

const zh_editor_history_error_slug_taken = /** @type {(inputs: Editor_History_Error_Slug_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此历史版本的链接已被另一篇文章使用，无法恢复。需先修改另一篇文章的链接。`)
};

const en_editor_history_error_slug_taken = /** @type {(inputs: Editor_History_Error_Slug_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Another post now uses this version's link, so it cannot be restored. Change that post's link first.`)
};

/**
* | output |
* | --- |
* | "Another post now uses this version's link, so it cannot be restored. Change that post's link first." |
*
* @param {Editor_History_Error_Slug_TakenInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_history_error_slug_taken = /** @type {((inputs?: Editor_History_Error_Slug_TakenInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_History_Error_Slug_TakenInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_history_error_slug_taken(inputs)
	return zh_editor_history_error_slug_taken(inputs)
});