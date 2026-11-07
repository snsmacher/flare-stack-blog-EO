/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ provider: NonNullable<unknown> }} Post_Video_PlayInputs */

const zh_post_video_play = /** @type {(inputs: Post_Video_PlayInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`播放${i?.provider}视频`)
};

const en_post_video_play = /** @type {(inputs: Post_Video_PlayInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Play ${i?.provider} video`)
};

/**
* | output |
* | --- |
* | "Play {provider} video" |
*
* @param {Post_Video_PlayInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const post_video_play = /** @type {((inputs: Post_Video_PlayInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Post_Video_PlayInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_post_video_play(inputs)
	return zh_post_video_play(inputs)
});