/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Comments_Item_ReplyInputs */

const zh_comments_item_reply = /** @type {(inputs: Comments_Item_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`回复`)
};

const en_comments_item_reply = /** @type {(inputs: Comments_Item_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reply`)
};

/**
* | output |
* | --- |
* | "Reply" |
*
* @param {Comments_Item_ReplyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const comments_item_reply = /** @type {((inputs?: Comments_Item_ReplyInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Comments_Item_ReplyInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_comments_item_reply(inputs)
	return zh_comments_item_reply(inputs)
});