/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Conflict_DescInputs */

const zh_editor_conflict_desc = /** @type {(inputs: Editor_Conflict_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`为避免覆盖，自动保存已暂停。可载入最新版本（当前页面未保存的修改将被丢弃），或以当前内容覆盖。`)
};

const en_editor_conflict_desc = /** @type {(inputs: Editor_Conflict_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autosave is paused so nothing gets overwritten. Load the latest version (your unsaved changes here are discarded), or overwrite it with what you have now.`)
};

/**
* | output |
* | --- |
* | "Autosave is paused so nothing gets overwritten. Load the latest version (your unsaved changes here are discarded), or overwrite it with what you have now." |
*
* @param {Editor_Conflict_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_conflict_desc = /** @type {((inputs?: Editor_Conflict_DescInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Conflict_DescInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_conflict_desc(inputs)
	return zh_editor_conflict_desc(inputs)
});