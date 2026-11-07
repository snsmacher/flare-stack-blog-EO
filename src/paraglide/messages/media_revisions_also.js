/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Media_Revisions_AlsoInputs */

const zh_media_revisions_also = /** @type {(inputs: Media_Revisions_AlsoInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`另有 ${i?.count} 篇文章仅历史版本引用`)
};

const en_media_revisions_also = /** @type {(inputs: Media_Revisions_AlsoInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} more posts use it only in earlier versions`)
};

/**
* | output |
* | --- |
* | "{count} more posts use it only in earlier versions" |
*
* @param {Media_Revisions_AlsoInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const media_revisions_also = /** @type {((inputs: Media_Revisions_AlsoInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Media_Revisions_AlsoInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_media_revisions_also(inputs)
	return zh_media_revisions_also(inputs)
});