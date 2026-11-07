/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Taxonomy_Sheet_Purge_DescInputs */

const zh_taxonomy_sheet_purge_desc = /** @type {(inputs: Taxonomy_Sheet_Purge_DescInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`将删除 ${i?.count} 个没有任何文章使用的标签，此操作无法撤销。`)
};

const en_taxonomy_sheet_purge_desc = /** @type {(inputs: Taxonomy_Sheet_Purge_DescInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`This deletes ${i?.count} tags that no post uses. It cannot be undone.`)
};

/**
* | output |
* | --- |
* | "This deletes {count} tags that no post uses. It cannot be undone." |
*
* @param {Taxonomy_Sheet_Purge_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const taxonomy_sheet_purge_desc = /** @type {((inputs: Taxonomy_Sheet_Purge_DescInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Taxonomy_Sheet_Purge_DescInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_taxonomy_sheet_purge_desc(inputs)
	return zh_taxonomy_sheet_purge_desc(inputs)
});