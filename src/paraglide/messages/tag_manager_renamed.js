/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tag_Manager_RenamedInputs */

const zh_tag_manager_renamed = /** @type {(inputs: Tag_Manager_RenamedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已重命名`)
};

const en_tag_manager_renamed = /** @type {(inputs: Tag_Manager_RenamedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Renamed`)
};

/**
* | output |
* | --- |
* | "Renamed" |
*
* @param {Tag_Manager_RenamedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const tag_manager_renamed = /** @type {((inputs?: Tag_Manager_RenamedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_Manager_RenamedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_tag_manager_renamed(inputs)
	return zh_tag_manager_renamed(inputs)
});