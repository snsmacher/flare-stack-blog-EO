/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Post_Summary_TitleInputs */

const zh_post_summary_title = /** @type {(inputs: Post_Summary_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`摘要`)
};

const en_post_summary_title = /** @type {(inputs: Post_Summary_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Summary`)
};

/**
* | output |
* | --- |
* | "Summary" |
*
* @param {Post_Summary_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const post_summary_title = /** @type {((inputs?: Post_Summary_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Post_Summary_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_post_summary_title(inputs)
	return zh_post_summary_title(inputs)
});