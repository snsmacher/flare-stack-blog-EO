/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Comments_Item_Unknown_UserInputs */

const zh_comments_item_unknown_user = /** @type {(inputs: Comments_Item_Unknown_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未知用户`)
};

const en_comments_item_unknown_user = /** @type {(inputs: Comments_Item_Unknown_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unknown User`)
};

/**
* | output |
* | --- |
* | "Unknown User" |
*
* @param {Comments_Item_Unknown_UserInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const comments_item_unknown_user = /** @type {((inputs?: Comments_Item_Unknown_UserInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Comments_Item_Unknown_UserInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_comments_item_unknown_user(inputs)
	return zh_comments_item_unknown_user(inputs)
});