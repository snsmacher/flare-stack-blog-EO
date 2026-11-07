/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Comments_Item_UnmuteInputs */

const zh_comments_item_unmute = /** @type {(inputs: Comments_Item_UnmuteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`解禁`)
};

const en_comments_item_unmute = /** @type {(inputs: Comments_Item_UnmuteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unmute`)
};

/**
* | output |
* | --- |
* | "Unmute" |
*
* @param {Comments_Item_UnmuteInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const comments_item_unmute = /** @type {((inputs?: Comments_Item_UnmuteInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Comments_Item_UnmuteInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_comments_item_unmute(inputs)
	return zh_comments_item_unmute(inputs)
});