/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Post_Heading_Link_CopiedInputs */

const zh_post_heading_link_copied = /** @type {(inputs: Post_Heading_Link_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已复制本节链接`)
};

const en_post_heading_link_copied = /** @type {(inputs: Post_Heading_Link_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link to this section copied`)
};

/**
* | output |
* | --- |
* | "Link to this section copied" |
*
* @param {Post_Heading_Link_CopiedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const post_heading_link_copied = /** @type {((inputs?: Post_Heading_Link_CopiedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Post_Heading_Link_CopiedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_post_heading_link_copied(inputs)
	return zh_post_heading_link_copied(inputs)
});