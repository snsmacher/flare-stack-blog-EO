/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Comments_Item_MuteInputs */

const zh_comments_item_mute = /** @type {(inputs: Comments_Item_MuteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`禁言`)
};

const en_comments_item_mute = /** @type {(inputs: Comments_Item_MuteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mute`)
};

/**
* | output |
* | --- |
* | "Mute" |
*
* @param {Comments_Item_MuteInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const comments_item_mute = /** @type {((inputs?: Comments_Item_MuteInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Comments_Item_MuteInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_comments_item_mute(inputs)
	return zh_comments_item_mute(inputs)
});