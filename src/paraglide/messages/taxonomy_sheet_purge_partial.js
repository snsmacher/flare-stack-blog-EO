/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ done: NonNullable<unknown>, failed: NonNullable<unknown> }} Taxonomy_Sheet_Purge_PartialInputs */

const zh_taxonomy_sheet_purge_partial = /** @type {(inputs: Taxonomy_Sheet_Purge_PartialInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已删除 ${i?.done} 个，${i?.failed} 个删除失败`)
};

const en_taxonomy_sheet_purge_partial = /** @type {(inputs: Taxonomy_Sheet_Purge_PartialInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Deleted ${i?.done}, ${i?.failed} failed`)
};

/**
* | output |
* | --- |
* | "Deleted {done}, {failed} failed" |
*
* @param {Taxonomy_Sheet_Purge_PartialInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const taxonomy_sheet_purge_partial = /** @type {((inputs: Taxonomy_Sheet_Purge_PartialInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Taxonomy_Sheet_Purge_PartialInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_taxonomy_sheet_purge_partial(inputs)
	return zh_taxonomy_sheet_purge_partial(inputs)
});