/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Comments_Mute_DescInputs */

const zh_comments_mute_desc = /** @type {(inputs: Comments_Mute_DescInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`确定要禁言 ${i?.name} 吗？禁言期间该用户将无法发表新评论。`)
};

const en_comments_mute_desc = /** @type {(inputs: Comments_Mute_DescInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Are you sure you want to mute ${i?.name}? They will not be able to post new comments while muted.`)
};

/**
* | output |
* | --- |
* | "Are you sure you want to mute {name}? They will not be able to post new comments while muted." |
*
* @param {Comments_Mute_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const comments_mute_desc = /** @type {((inputs: Comments_Mute_DescInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Comments_Mute_DescInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_comments_mute_desc(inputs)
	return zh_comments_mute_desc(inputs)
});