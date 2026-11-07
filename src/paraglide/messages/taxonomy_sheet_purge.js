/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Taxonomy_Sheet_PurgeInputs */

const zh_taxonomy_sheet_purge = /** @type {(inputs: Taxonomy_Sheet_PurgeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`删除全部未使用标签（${i?.count} 个）`)
};

const en_taxonomy_sheet_purge = /** @type {(inputs: Taxonomy_Sheet_PurgeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Delete all unused tags (${i?.count})`)
};

/**
* | output |
* | --- |
* | "Delete all unused tags ({count})" |
*
* @param {Taxonomy_Sheet_PurgeInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const taxonomy_sheet_purge = /** @type {((inputs: Taxonomy_Sheet_PurgeInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Taxonomy_Sheet_PurgeInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_taxonomy_sheet_purge(inputs)
	return zh_taxonomy_sheet_purge(inputs)
});