/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Taxonomy_Sheet_Tag_CreatedInputs */

const zh_taxonomy_sheet_tag_created = /** @type {(inputs: Taxonomy_Sheet_Tag_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已新建标签「${i?.name}」`)
};

const en_taxonomy_sheet_tag_created = /** @type {(inputs: Taxonomy_Sheet_Tag_CreatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Created tag “${i?.name}”`)
};

/**
* | output |
* | --- |
* | "Created tag “{name}”" |
*
* @param {Taxonomy_Sheet_Tag_CreatedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const taxonomy_sheet_tag_created = /** @type {((inputs: Taxonomy_Sheet_Tag_CreatedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Taxonomy_Sheet_Tag_CreatedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_taxonomy_sheet_tag_created(inputs)
	return zh_taxonomy_sheet_tag_created(inputs)
});