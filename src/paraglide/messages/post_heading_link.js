/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Post_Heading_LinkInputs */

const zh_post_heading_link = /** @type {(inputs: Post_Heading_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`复制本节链接`)
};

const en_post_heading_link = /** @type {(inputs: Post_Heading_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copy link to this section`)
};

/**
* | output |
* | --- |
* | "Copy link to this section" |
*
* @param {Post_Heading_LinkInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const post_heading_link = /** @type {((inputs?: Post_Heading_LinkInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Post_Heading_LinkInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_post_heading_link(inputs)
	return zh_post_heading_link(inputs)
});