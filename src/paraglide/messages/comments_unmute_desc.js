/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Comments_Unmute_DescInputs */

const zh_comments_unmute_desc = /** @type {(inputs: Comments_Unmute_DescInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`确定解除对 ${i?.name} 的禁言吗？`)
};

const en_comments_unmute_desc = /** @type {(inputs: Comments_Unmute_DescInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Unmute ${i?.name}?`)
};

/**
* | output |
* | --- |
* | "Unmute {name}?" |
*
* @param {Comments_Unmute_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const comments_unmute_desc = /** @type {((inputs: Comments_Unmute_DescInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Comments_Unmute_DescInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_comments_unmute_desc(inputs)
	return zh_comments_unmute_desc(inputs)
});