/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tag_Manager_TitleInputs */

const zh_tag_manager_title = /** @type {(inputs: Tag_Manager_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`标签`)
};

const en_tag_manager_title = /** @type {(inputs: Tag_Manager_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tags`)
};

/**
* | output |
* | --- |
* | "Tags" |
*
* @param {Tag_Manager_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const tag_manager_title = /** @type {((inputs?: Tag_Manager_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_Manager_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_tag_manager_title(inputs)
	return zh_tag_manager_title(inputs)
});