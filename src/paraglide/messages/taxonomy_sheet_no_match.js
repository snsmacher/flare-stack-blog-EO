/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ query: NonNullable<unknown> }} Taxonomy_Sheet_No_MatchInputs */

const zh_taxonomy_sheet_no_match = /** @type {(inputs: Taxonomy_Sheet_No_MatchInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`没有匹配「${i?.query}」的结果`)
};

const en_taxonomy_sheet_no_match = /** @type {(inputs: Taxonomy_Sheet_No_MatchInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nothing matches “${i?.query}”`)
};

/**
* | output |
* | --- |
* | "Nothing matches “{query}”" |
*
* @param {Taxonomy_Sheet_No_MatchInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const taxonomy_sheet_no_match = /** @type {((inputs: Taxonomy_Sheet_No_MatchInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Taxonomy_Sheet_No_MatchInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_taxonomy_sheet_no_match(inputs)
	return zh_taxonomy_sheet_no_match(inputs)
});