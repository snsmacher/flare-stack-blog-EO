/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tag_Selector_Create_FailInputs */

const zh_tag_selector_create_fail = /** @type {(inputs: Tag_Selector_Create_FailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创建标签失败`)
};

const en_tag_selector_create_fail = /** @type {(inputs: Tag_Selector_Create_FailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to create tag`)
};

/**
* | output |
* | --- |
* | "Failed to create tag" |
*
* @param {Tag_Selector_Create_FailInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const tag_selector_create_fail = /** @type {((inputs?: Tag_Selector_Create_FailInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_Selector_Create_FailInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_tag_selector_create_fail(inputs)
	return zh_tag_selector_create_fail(inputs)
});