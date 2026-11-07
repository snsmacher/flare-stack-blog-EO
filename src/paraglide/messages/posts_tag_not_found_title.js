/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Posts_Tag_Not_Found_TitleInputs */

const zh_posts_tag_not_found_title = /** @type {(inputs: Posts_Tag_Not_Found_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`标签「${i?.name}」不存在`)
};

const en_posts_tag_not_found_title = /** @type {(inputs: Posts_Tag_Not_Found_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tag “${i?.name}” does not exist`)
};

/**
* | output |
* | --- |
* | "Tag “{name}” does not exist" |
*
* @param {Posts_Tag_Not_Found_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const posts_tag_not_found_title = /** @type {((inputs: Posts_Tag_Not_Found_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Posts_Tag_Not_Found_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_posts_tag_not_found_title(inputs)
	return zh_posts_tag_not_found_title(inputs)
});