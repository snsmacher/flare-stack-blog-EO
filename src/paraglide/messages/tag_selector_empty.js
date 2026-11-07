/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tag_Selector_EmptyInputs */

const zh_tag_selector_empty = /** @type {(inputs: Tag_Selector_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`暂无标签 (输入以创建)`)
};

const en_tag_selector_empty = /** @type {(inputs: Tag_Selector_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No tags available (type to create)`)
};

/**
* | output |
* | --- |
* | "No tags available (type to create)" |
*
* @param {Tag_Selector_EmptyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const tag_selector_empty = /** @type {((inputs?: Tag_Selector_EmptyInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_Selector_EmptyInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_tag_selector_empty(inputs)
	return zh_tag_selector_empty(inputs)
});