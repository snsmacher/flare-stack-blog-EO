/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Meta_SummaryInputs */

const zh_editor_meta_summary = /** @type {(inputs: Editor_Meta_SummaryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`摘要`)
};

const en_editor_meta_summary = /** @type {(inputs: Editor_Meta_SummaryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Summary`)
};

/**
* | output |
* | --- |
* | "Summary" |
*
* @param {Editor_Meta_SummaryInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_meta_summary = /** @type {((inputs?: Editor_Meta_SummaryInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Meta_SummaryInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_meta_summary(inputs)
	return zh_editor_meta_summary(inputs)
});