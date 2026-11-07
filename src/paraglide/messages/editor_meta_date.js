/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Meta_DateInputs */

const zh_editor_meta_date = /** @type {(inputs: Editor_Meta_DateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`日期`)
};

const en_editor_meta_date = /** @type {(inputs: Editor_Meta_DateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Date`)
};

/**
* | output |
* | --- |
* | "Date" |
*
* @param {Editor_Meta_DateInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_meta_date = /** @type {((inputs?: Editor_Meta_DateInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Meta_DateInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_meta_date(inputs)
	return zh_editor_meta_date(inputs)
});