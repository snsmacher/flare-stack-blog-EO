/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Summary_PlaceholderInputs */

const zh_editor_summary_placeholder = /** @type {(inputs: Editor_Summary_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`简短的介绍...`)
};

const en_editor_summary_placeholder = /** @type {(inputs: Editor_Summary_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A brief introduction...`)
};

/**
* | output |
* | --- |
* | "A brief introduction..." |
*
* @param {Editor_Summary_PlaceholderInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_summary_placeholder = /** @type {((inputs?: Editor_Summary_PlaceholderInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Summary_PlaceholderInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_summary_placeholder(inputs)
	return zh_editor_summary_placeholder(inputs)
});