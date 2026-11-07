/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Status_Draft_SavedInputs */

const zh_editor_status_draft_saved = /** @type {(inputs: Editor_Status_Draft_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`草稿已保存`)
};

const en_editor_status_draft_saved = /** @type {(inputs: Editor_Status_Draft_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Draft saved`)
};

/**
* | output |
* | --- |
* | "Draft saved" |
*
* @param {Editor_Status_Draft_SavedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_status_draft_saved = /** @type {((inputs?: Editor_Status_Draft_SavedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Status_Draft_SavedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_status_draft_saved(inputs)
	return zh_editor_status_draft_saved(inputs)
});