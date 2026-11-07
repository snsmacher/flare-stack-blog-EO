/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Taxonomy_Sheet_Tag_EmptyInputs */

const zh_taxonomy_sheet_tag_empty = /** @type {(inputs: Taxonomy_Sheet_Tag_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`还没有标签，输入名称后按回车新建。`)
};

const en_taxonomy_sheet_tag_empty = /** @type {(inputs: Taxonomy_Sheet_Tag_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No tags yet. Type a name and press Enter to create one.`)
};

/**
* | output |
* | --- |
* | "No tags yet. Type a name and press Enter to create one." |
*
* @param {Taxonomy_Sheet_Tag_EmptyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const taxonomy_sheet_tag_empty = /** @type {((inputs?: Taxonomy_Sheet_Tag_EmptyInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Taxonomy_Sheet_Tag_EmptyInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_taxonomy_sheet_tag_empty(inputs)
	return zh_taxonomy_sheet_tag_empty(inputs)
});