/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ done: NonNullable<unknown>, total: NonNullable<unknown> }} Taxonomy_Sheet_Purge_ProgressInputs */

const zh_taxonomy_sheet_purge_progress = /** @type {(inputs: Taxonomy_Sheet_Purge_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`正在删除 ${i?.done}/${i?.total}`)
};

const en_taxonomy_sheet_purge_progress = /** @type {(inputs: Taxonomy_Sheet_Purge_ProgressInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Deleting ${i?.done}/${i?.total}`)
};

/**
* | output |
* | --- |
* | "Deleting {done}/{total}" |
*
* @param {Taxonomy_Sheet_Purge_ProgressInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const taxonomy_sheet_purge_progress = /** @type {((inputs: Taxonomy_Sheet_Purge_ProgressInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Taxonomy_Sheet_Purge_ProgressInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_taxonomy_sheet_purge_progress(inputs)
	return zh_taxonomy_sheet_purge_progress(inputs)
});