/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_History_EmptyInputs */

const zh_editor_history_empty = /** @type {(inputs: Editor_History_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`还没有历史版本。`)
};

const en_editor_history_empty = /** @type {(inputs: Editor_History_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No versions yet.`)
};

/**
* | output |
* | --- |
* | "No versions yet." |
*
* @param {Editor_History_EmptyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_history_empty = /** @type {((inputs?: Editor_History_EmptyInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_History_EmptyInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_history_empty(inputs)
	return zh_editor_history_empty(inputs)
});