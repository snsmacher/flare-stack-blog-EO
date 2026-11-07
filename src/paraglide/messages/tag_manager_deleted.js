/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tag_Manager_DeletedInputs */

const zh_tag_manager_deleted = /** @type {(inputs: Tag_Manager_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除成功`)
};

const en_tag_manager_deleted = /** @type {(inputs: Tag_Manager_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deleted`)
};

/**
* | output |
* | --- |
* | "Deleted" |
*
* @param {Tag_Manager_DeletedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const tag_manager_deleted = /** @type {((inputs?: Tag_Manager_DeletedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_Manager_DeletedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_tag_manager_deleted(inputs)
	return zh_tag_manager_deleted(inputs)
});