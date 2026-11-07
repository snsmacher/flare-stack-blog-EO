/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ time: NonNullable<unknown> }} Editor_Status_SavedInputs */

const zh_editor_status_saved = /** @type {(inputs: Editor_Status_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已保存 ${i?.time}`)
};

const en_editor_status_saved = /** @type {(inputs: Editor_Status_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Saved ${i?.time}`)
};

/**
* | time | output |
* | --- | --- |
* | * | "Saved {time}" |
*
* @param {Editor_Status_SavedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_status_saved = /** @type {((inputs: Editor_Status_SavedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Status_SavedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_status_saved(inputs)
	return zh_editor_status_saved(inputs)
});