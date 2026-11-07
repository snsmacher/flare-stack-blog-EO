/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tag_Selector_No_MatchInputs */

const zh_tag_selector_no_match = /** @type {(inputs: Tag_Selector_No_MatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无匹配标签`)
};

const en_tag_selector_no_match = /** @type {(inputs: Tag_Selector_No_MatchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No matching tags found`)
};

/**
* | output |
* | --- |
* | "No matching tags found" |
*
* @param {Tag_Selector_No_MatchInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const tag_selector_no_match = /** @type {((inputs?: Tag_Selector_No_MatchInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_Selector_No_MatchInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_tag_selector_no_match(inputs)
	return zh_tag_selector_no_match(inputs)
});