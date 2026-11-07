/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ time: NonNullable<unknown> }} Editor_Status_Saved_Except_LinkInputs */

const zh_editor_status_saved_except_link = /** @type {(inputs: Editor_Status_Saved_Except_LinkInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已保存 ${i?.time}，链接除外`)
};

const en_editor_status_saved_except_link = /** @type {(inputs: Editor_Status_Saved_Except_LinkInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Saved ${i?.time}, except the link`)
};

/**
* | output |
* | --- |
* | "Saved {time}, except the link" |
*
* @param {Editor_Status_Saved_Except_LinkInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_status_saved_except_link = /** @type {((inputs: Editor_Status_Saved_Except_LinkInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Status_Saved_Except_LinkInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_status_saved_except_link(inputs)
	return zh_editor_status_saved_except_link(inputs)
});