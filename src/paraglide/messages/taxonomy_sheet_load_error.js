/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Taxonomy_Sheet_Load_ErrorInputs */

const zh_taxonomy_sheet_load_error = /** @type {(inputs: Taxonomy_Sheet_Load_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`加载失败`)
};

const en_taxonomy_sheet_load_error = /** @type {(inputs: Taxonomy_Sheet_Load_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn't load`)
};

/**
* | output |
* | --- |
* | "Couldn't load" |
*
* @param {Taxonomy_Sheet_Load_ErrorInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const taxonomy_sheet_load_error = /** @type {((inputs?: Taxonomy_Sheet_Load_ErrorInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Taxonomy_Sheet_Load_ErrorInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_taxonomy_sheet_load_error(inputs)
	return zh_taxonomy_sheet_load_error(inputs)
});