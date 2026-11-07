/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_History_Restore_Anyway_MessageInputs */

const zh_editor_history_restore_anyway_message = /** @type {(inputs: Editor_History_Restore_Anyway_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文章在打开此历史版本后已被再次保存。继续恢复将替换该次保存，当前草稿会先保存为一个新版本。`)
};

const en_editor_history_restore_anyway_message = /** @type {(inputs: Editor_History_Restore_Anyway_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The post was saved again after this version was opened. Restoring replaces that save, and the current draft is kept as a new version first.`)
};

/**
* | output |
* | --- |
* | "The post was saved again after this version was opened. Restoring replaces that save, and the current draft is kept as a new version first." |
*
* @param {Editor_History_Restore_Anyway_MessageInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_history_restore_anyway_message = /** @type {((inputs?: Editor_History_Restore_Anyway_MessageInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_History_Restore_Anyway_MessageInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_history_restore_anyway_message(inputs)
	return zh_editor_history_restore_anyway_message(inputs)
});