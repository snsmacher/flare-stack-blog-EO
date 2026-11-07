/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tag_Selector_Load_FailInputs */

const zh_tag_selector_load_fail = /** @type {(inputs: Tag_Selector_Load_FailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`加载标签失败`)
};

const en_tag_selector_load_fail = /** @type {(inputs: Tag_Selector_Load_FailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to load tags`)
};

/**
* | output |
* | --- |
* | "Failed to load tags" |
*
* @param {Tag_Selector_Load_FailInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const tag_selector_load_fail = /** @type {((inputs?: Tag_Selector_Load_FailInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_Selector_Load_FailInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_tag_selector_load_fail(inputs)
	return zh_tag_selector_load_fail(inputs)
});