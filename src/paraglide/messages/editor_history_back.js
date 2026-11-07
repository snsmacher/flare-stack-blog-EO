/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_History_BackInputs */

const zh_editor_history_back = /** @type {(inputs: Editor_History_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`返回编辑`)
};

const en_editor_history_back = /** @type {(inputs: Editor_History_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Back to editing`)
};

/**
* | output |
* | --- |
* | "Back to editing" |
*
* @param {Editor_History_BackInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_history_back = /** @type {((inputs?: Editor_History_BackInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_History_BackInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_history_back(inputs)
	return zh_editor_history_back(inputs)
});