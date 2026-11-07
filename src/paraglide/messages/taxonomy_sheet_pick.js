/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown>, count: NonNullable<unknown> }} Taxonomy_Sheet_PickInputs */

const zh_taxonomy_sheet_pick = /** @type {(inputs: Taxonomy_Sheet_PickInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`筛选「${i?.name}」的文章，共 ${i?.count} 篇`)
};

const en_taxonomy_sheet_pick = /** @type {(inputs: Taxonomy_Sheet_PickInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Show posts in “${i?.name}” (${i?.count})`)
};

/**
* | output |
* | --- |
* | "Show posts in “{name}” ({count})" |
*
* @param {Taxonomy_Sheet_PickInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const taxonomy_sheet_pick = /** @type {((inputs: Taxonomy_Sheet_PickInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Taxonomy_Sheet_PickInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_taxonomy_sheet_pick(inputs)
	return zh_taxonomy_sheet_pick(inputs)
});