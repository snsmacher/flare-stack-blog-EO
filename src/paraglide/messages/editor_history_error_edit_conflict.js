/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_History_Error_Edit_ConflictInputs */

const zh_editor_history_error_edit_conflict = /** @type {(inputs: Editor_History_Error_Edit_ConflictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`打开此历史版本后，文章已被再次保存，此次恢复未执行。仍要恢复时，该次保存会被替换，当前草稿会先保存为一个新版本。`)
};

const en_editor_history_error_edit_conflict = /** @type {(inputs: Editor_History_Error_Edit_ConflictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The post was saved again after this version was opened, so nothing was restored. Restoring anyway replaces that save; the current draft is kept as a new version first.`)
};

/**
* | output |
* | --- |
* | "The post was saved again after this version was opened, so nothing was restored. Restoring anyway replaces that save; the current draft is kept as a new vers..." |
*
* @param {Editor_History_Error_Edit_ConflictInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_history_error_edit_conflict = /** @type {((inputs?: Editor_History_Error_Edit_ConflictInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_History_Error_Edit_ConflictInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_history_error_edit_conflict(inputs)
	return zh_editor_history_error_edit_conflict(inputs)
});