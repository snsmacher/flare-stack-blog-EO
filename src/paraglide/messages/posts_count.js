/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Posts_CountInputs */

const zh_posts_count = /** @type {(inputs: Posts_CountInputs) => LocalizedString} */ (i) => {
	const formattedCountZh = registry.number("zh", i?.count, {});
	const formattedCountEn = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${formattedCountZh} 篇文章`)
};

const en_posts_count = /** @type {(inputs: Posts_CountInputs) => LocalizedString} */ (i) => {const formattedCountZh = registry.number("en", i?.count, {});
	const formattedCountEn = registry.number("en", i?.count, {});
	if ((i?.count === 1 || i?.count === "1")) return /** @type {LocalizedString} */ (`${formattedCountEn} post`);
	return /** @type {LocalizedString} */ (`${formattedCountEn} posts`)
	
};

/**
* | count | output |
* | --- | --- |
* | "1" | "{formattedCountEn} post" |
* | * | "{formattedCountEn} posts" |
*
* @param {Posts_CountInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const posts_count = /** @type {((inputs: Posts_CountInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Posts_CountInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_posts_count(inputs)
	return zh_posts_count(inputs)
});