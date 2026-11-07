/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Status_SavingInputs */

const zh_editor_status_saving = /** @type {(inputs: Editor_Status_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存中...`)
};

const en_editor_status_saving = /** @type {(inputs: Editor_Status_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saving...`)
};

/**
* | output |
* | --- |
* | "Saving..." |
*
* @param {Editor_Status_SavingInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_status_saving = /** @type {((inputs?: Editor_Status_SavingInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Status_SavingInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_status_saving(inputs)
	return zh_editor_status_saving(inputs)
});