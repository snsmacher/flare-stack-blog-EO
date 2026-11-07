/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ provider: NonNullable<unknown> }} Post_Video_OpenInputs */

const zh_post_video_open = /** @type {(inputs: Post_Video_OpenInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`在${i?.provider}打开`)
};

const en_post_video_open = /** @type {(inputs: Post_Video_OpenInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Open on ${i?.provider}`)
};

/**
* | output |
* | --- |
* | "Open on {provider}" |
*
* @param {Post_Video_OpenInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const post_video_open = /** @type {((inputs: Post_Video_OpenInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Post_Video_OpenInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_post_video_open(inputs)
	return zh_post_video_open(inputs)
});