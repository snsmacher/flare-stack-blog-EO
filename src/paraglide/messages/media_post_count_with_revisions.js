/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown>, revisions: NonNullable<unknown> }} Media_Post_Count_With_RevisionsInputs */

const zh_media_post_count_with_revisions = /** @type {(inputs: Media_Post_Count_With_RevisionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} 篇 · 另 ${i?.revisions} 篇历史`)
};

const en_media_post_count_with_revisions = /** @type {(inputs: Media_Post_Count_With_RevisionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} posts · ${i?.revisions} in revisions`)
};

/**
* | output |
* | --- |
* | "{count} posts · {revisions} in revisions" |
*
* @param {Media_Post_Count_With_RevisionsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const media_post_count_with_revisions = /** @type {((inputs: Media_Post_Count_With_RevisionsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Media_Post_Count_With_RevisionsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_media_post_count_with_revisions(inputs)
	return zh_media_post_count_with_revisions(inputs)
});