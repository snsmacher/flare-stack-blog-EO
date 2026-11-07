/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Post_Views_CountInputs */

const zh_post_views_count = /** @type {(inputs: Post_Views_CountInputs) => LocalizedString} */ (i) => {
	const formattedCountZh = registry.number("zh", i?.count, {});
	const formattedCountEn = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${formattedCountZh} 次浏览`)
};

const en_post_views_count = /** @type {(inputs: Post_Views_CountInputs) => LocalizedString} */ (i) => {const formattedCountZh = registry.number("en", i?.count, {});
	const formattedCountEn = registry.number("en", i?.count, {});
	if ((i?.count === 1 || i?.count === "1")) return /** @type {LocalizedString} */ (`${formattedCountEn} view`);
	return /** @type {LocalizedString} */ (`${formattedCountEn} views`)
	
};

/**
* | count | output |
* | --- | --- |
* | "1" | "{formattedCountEn} view" |
* | * | "{formattedCountEn} views" |
*
* @param {Post_Views_CountInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const post_views_count = /** @type {((inputs: Post_Views_CountInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Post_Views_CountInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_post_views_count(inputs)
	return zh_post_views_count(inputs)
});