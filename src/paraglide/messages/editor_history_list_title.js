/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_History_List_TitleInputs */

const zh_editor_history_list_title = /** @type {(inputs: Editor_History_List_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`历史版本`)
};

const en_editor_history_list_title = /** @type {(inputs: Editor_History_List_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versions`)
};

/**
* | output |
* | --- |
* | "Versions" |
*
* @param {Editor_History_List_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_history_list_title = /** @type {((inputs?: Editor_History_List_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_History_List_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_history_list_title(inputs)
	return zh_editor_history_list_title(inputs)
});