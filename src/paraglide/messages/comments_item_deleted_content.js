/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Comments_Item_Deleted_ContentInputs */

const zh_comments_item_deleted_content = /** @type {(inputs: Comments_Item_Deleted_ContentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`该评论已被删除`)
};

const en_comments_item_deleted_content = /** @type {(inputs: Comments_Item_Deleted_ContentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This comment has been deleted`)
};

/**
* | output |
* | --- |
* | "This comment has been deleted" |
*
* @param {Comments_Item_Deleted_ContentInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const comments_item_deleted_content = /** @type {((inputs?: Comments_Item_Deleted_ContentInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Comments_Item_Deleted_ContentInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_comments_item_deleted_content(inputs)
	return zh_comments_item_deleted_content(inputs)
});