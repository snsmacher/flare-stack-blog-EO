/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Leave_MessageInputs */

const zh_editor_leave_message = /** @type {(inputs: Editor_Leave_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`您有正在保存的更改。离开可能会导致部分数据丢失。`)
};

const en_editor_leave_message = /** @type {(inputs: Editor_Leave_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You have unsaved changes. Leaving may cause data loss.`)
};

/**
* | output |
* | --- |
* | "You have unsaved changes. Leaving may cause data loss." |
*
* @param {Editor_Leave_MessageInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_leave_message = /** @type {((inputs?: Editor_Leave_MessageInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Leave_MessageInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_leave_message(inputs)
	return zh_editor_leave_message(inputs)
});