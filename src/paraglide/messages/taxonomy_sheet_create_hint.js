/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Taxonomy_Sheet_Create_HintInputs */

const zh_taxonomy_sheet_create_hint = /** @type {(inputs: Taxonomy_Sheet_Create_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`按回车新建「${i?.name}」`)
};

const en_taxonomy_sheet_create_hint = /** @type {(inputs: Taxonomy_Sheet_Create_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Press Enter to create “${i?.name}”`)
};

/**
* | output |
* | --- |
* | "Press Enter to create “{name}”" |
*
* @param {Taxonomy_Sheet_Create_HintInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const taxonomy_sheet_create_hint = /** @type {((inputs: Taxonomy_Sheet_Create_HintInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Taxonomy_Sheet_Create_HintInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_taxonomy_sheet_create_hint(inputs)
	return zh_taxonomy_sheet_create_hint(inputs)
});