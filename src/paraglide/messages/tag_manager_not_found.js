/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tag_Manager_Not_FoundInputs */

const zh_tag_manager_not_found = /** @type {(inputs: Tag_Manager_Not_FoundInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`标签不存在`)
};

const en_tag_manager_not_found = /** @type {(inputs: Tag_Manager_Not_FoundInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tag not found`)
};

/**
* | output |
* | --- |
* | "Tag not found" |
*
* @param {Tag_Manager_Not_FoundInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const tag_manager_not_found = /** @type {((inputs?: Tag_Manager_Not_FoundInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_Manager_Not_FoundInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_tag_manager_not_found(inputs)
	return zh_tag_manager_not_found(inputs)
});