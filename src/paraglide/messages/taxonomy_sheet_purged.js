/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Taxonomy_Sheet_PurgedInputs */

const zh_taxonomy_sheet_purged = /** @type {(inputs: Taxonomy_Sheet_PurgedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已删除 ${i?.count} 个未使用标签`)
};

const en_taxonomy_sheet_purged = /** @type {(inputs: Taxonomy_Sheet_PurgedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Deleted ${i?.count} unused tags`)
};

/**
* | output |
* | --- |
* | "Deleted {count} unused tags" |
*
* @param {Taxonomy_Sheet_PurgedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const taxonomy_sheet_purged = /** @type {((inputs: Taxonomy_Sheet_PurgedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Taxonomy_Sheet_PurgedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_taxonomy_sheet_purged(inputs)
	return zh_taxonomy_sheet_purged(inputs)
});