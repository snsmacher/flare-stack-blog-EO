/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tag_Selector_Create_Fail_DescInputs */

const zh_tag_selector_create_fail_desc = /** @type {(inputs: Tag_Selector_Create_Fail_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`该标签名称已存在`)
};

const en_tag_selector_create_fail_desc = /** @type {(inputs: Tag_Selector_Create_Fail_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tag name already exists`)
};

/**
* | output |
* | --- |
* | "Tag name already exists" |
*
* @param {Tag_Selector_Create_Fail_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const tag_selector_create_fail_desc = /** @type {((inputs?: Tag_Selector_Create_Fail_DescInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_Selector_Create_Fail_DescInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_tag_selector_create_fail_desc(inputs)
	return zh_tag_selector_create_fail_desc(inputs)
});