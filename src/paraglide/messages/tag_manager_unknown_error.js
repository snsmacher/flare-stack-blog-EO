/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tag_Manager_Unknown_ErrorInputs */

const zh_tag_manager_unknown_error = /** @type {(inputs: Tag_Manager_Unknown_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`操作失败，请重试`)
};

const en_tag_manager_unknown_error = /** @type {(inputs: Tag_Manager_Unknown_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Something went wrong. Please try again.`)
};

/**
* | output |
* | --- |
* | "Something went wrong. Please try again." |
*
* @param {Tag_Manager_Unknown_ErrorInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const tag_manager_unknown_error = /** @type {((inputs?: Tag_Manager_Unknown_ErrorInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_Manager_Unknown_ErrorInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_tag_manager_unknown_error(inputs)
	return zh_tag_manager_unknown_error(inputs)
});