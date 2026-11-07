/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Taxonomy_Sheet_Category_CreatedInputs */

const zh_taxonomy_sheet_category_created = /** @type {(inputs: Taxonomy_Sheet_Category_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已新建分类「${i?.name}」`)
};

const en_taxonomy_sheet_category_created = /** @type {(inputs: Taxonomy_Sheet_Category_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Created category “${i?.name}”`)
};

/**
* | output |
* | --- |
* | "Created category “{name}”" |
*
* @param {Taxonomy_Sheet_Category_CreatedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const taxonomy_sheet_category_created = /** @type {((inputs: Taxonomy_Sheet_Category_CreatedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Taxonomy_Sheet_Category_CreatedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_taxonomy_sheet_category_created(inputs)
	return zh_taxonomy_sheet_category_created(inputs)
});