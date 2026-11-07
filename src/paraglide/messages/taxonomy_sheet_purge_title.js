/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Taxonomy_Sheet_Purge_TitleInputs */

const zh_taxonomy_sheet_purge_title = /** @type {(inputs: Taxonomy_Sheet_Purge_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除未使用的标签`)
};

const en_taxonomy_sheet_purge_title = /** @type {(inputs: Taxonomy_Sheet_Purge_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete unused tags`)
};

/**
* | output |
* | --- |
* | "Delete unused tags" |
*
* @param {Taxonomy_Sheet_Purge_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const taxonomy_sheet_purge_title = /** @type {((inputs?: Taxonomy_Sheet_Purge_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Taxonomy_Sheet_Purge_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_taxonomy_sheet_purge_title(inputs)
	return zh_taxonomy_sheet_purge_title(inputs)
});