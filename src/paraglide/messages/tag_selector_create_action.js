/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ searchTerm: NonNullable<unknown> }} Tag_Selector_Create_ActionInputs */

const zh_tag_selector_create_action = /** @type {(inputs: Tag_Selector_Create_ActionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`创建 "${i?.searchTerm}"`)
};

const en_tag_selector_create_action = /** @type {(inputs: Tag_Selector_Create_ActionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Create "${i?.searchTerm}"`)
};

/**
* | output |
* | --- |
* | "Create \"{searchTerm}\"" |
*
* @param {Tag_Selector_Create_ActionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const tag_selector_create_action = /** @type {((inputs: Tag_Selector_Create_ActionInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_Selector_Create_ActionInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_tag_selector_create_action(inputs)
	return zh_tag_selector_create_action(inputs)
});