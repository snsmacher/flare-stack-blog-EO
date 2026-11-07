/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Status_PausedInputs */

const zh_editor_status_paused = /** @type {(inputs: Editor_Status_PausedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自动保存已暂停`)
};

const en_editor_status_paused = /** @type {(inputs: Editor_Status_PausedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autosave paused`)
};

/**
* | output |
* | --- |
* | "Autosave paused" |
*
* @param {Editor_Status_PausedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_status_paused = /** @type {((inputs?: Editor_Status_PausedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Status_PausedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_status_paused(inputs)
	return zh_editor_status_paused(inputs)
});