/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Comments_Item_Deleted_AuthorInputs */

const zh_comments_item_deleted_author = /** @type {(inputs: Comments_Item_Deleted_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已删除`)
};

const en_comments_item_deleted_author = /** @type {(inputs: Comments_Item_Deleted_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deleted`)
};

/**
* | output |
* | --- |
* | "Deleted" |
*
* @param {Comments_Item_Deleted_AuthorInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const comments_item_deleted_author = /** @type {((inputs?: Comments_Item_Deleted_AuthorInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Comments_Item_Deleted_AuthorInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_comments_item_deleted_author(inputs)
	return zh_comments_item_deleted_author(inputs)
});