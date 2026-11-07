/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Post_Word_CountInputs */

const zh_post_word_count = /** @type {(inputs: Post_Word_CountInputs) => LocalizedString} */ (i) => {
	const formattedCountZh = registry.number("zh", i?.count, {});
	const formattedCountEn = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`约 ${formattedCountZh} 字`)
};

const en_post_word_count = /** @type {(inputs: Post_Word_CountInputs) => LocalizedString} */ (i) => {const formattedCountZh = registry.number("en", i?.count, {});
	const formattedCountEn = registry.number("en", i?.count, {});
	if ((i?.count === 1 || i?.count === "1")) return /** @type {LocalizedString} */ (`About ${formattedCountEn} word`);
	return /** @type {LocalizedString} */ (`About ${formattedCountEn} words`)
	
};

/**
* | count | output |
* | --- | --- |
* | "1" | "About {formattedCountEn} word" |
* | * | "About {formattedCountEn} words" |
*
* @param {Post_Word_CountInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const post_word_count = /** @type {((inputs: Post_Word_CountInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Post_Word_CountInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_post_word_count(inputs)
	return zh_post_word_count(inputs)
});