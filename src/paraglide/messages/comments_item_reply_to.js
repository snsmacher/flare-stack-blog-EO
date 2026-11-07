/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Comments_Item_Reply_ToInputs */

const zh_comments_item_reply_to = /** @type {(inputs: Comments_Item_Reply_ToInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`回复 @${i?.name}`)
};

const en_comments_item_reply_to = /** @type {(inputs: Comments_Item_Reply_ToInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Reply to @${i?.name}`)
};

/**
* | output |
* | --- |
* | "Reply to @{name}" |
*
* @param {Comments_Item_Reply_ToInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const comments_item_reply_to = /** @type {((inputs: Comments_Item_Reply_ToInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Comments_Item_Reply_ToInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_comments_item_reply_to(inputs)
	return zh_comments_item_reply_to(inputs)
});