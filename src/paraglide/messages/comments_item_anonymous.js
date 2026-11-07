/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Comments_Item_AnonymousInputs */

const zh_comments_item_anonymous = /** @type {(inputs: Comments_Item_AnonymousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`匿名用户`)
};

const en_comments_item_anonymous = /** @type {(inputs: Comments_Item_AnonymousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anonymous`)
};

/**
* | output |
* | --- |
* | "Anonymous" |
*
* @param {Comments_Item_AnonymousInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const comments_item_anonymous = /** @type {((inputs?: Comments_Item_AnonymousInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Comments_Item_AnonymousInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_comments_item_anonymous(inputs)
	return zh_comments_item_anonymous(inputs)
});