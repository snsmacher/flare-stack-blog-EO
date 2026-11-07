/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Post_Heading_Link_Copy_FailedInputs */

const zh_post_heading_link_copy_failed = /** @type {(inputs: Post_Heading_Link_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`复制失败，请手动复制地址栏中的链接`)
};

const en_post_heading_link_copy_failed = /** @type {(inputs: Post_Heading_Link_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn't copy the link. Copy it from the address bar instead.`)
};

/**
* | output |
* | --- |
* | "Couldn't copy the link. Copy it from the address bar instead." |
*
* @param {Post_Heading_Link_Copy_FailedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const post_heading_link_copy_failed = /** @type {((inputs?: Post_Heading_Link_Copy_FailedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Post_Heading_Link_Copy_FailedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_post_heading_link_copy_failed(inputs)
	return zh_post_heading_link_copy_failed(inputs)
});