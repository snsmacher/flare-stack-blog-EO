/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ provider: NonNullable<unknown>, title: NonNullable<unknown> }} Post_Video_Play_TitleInputs */

const zh_post_video_play_title = /** @type {(inputs: Post_Video_Play_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`播放${i?.provider}视频：${i?.title}`)
};

const en_post_video_play_title = /** @type {(inputs: Post_Video_Play_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Play ${i?.provider} video: ${i?.title}`)
};

/**
* | output |
* | --- |
* | "Play {provider} video: {title}" |
*
* @param {Post_Video_Play_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const post_video_play_title = /** @type {((inputs: Post_Video_Play_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Post_Video_Play_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_post_video_play_title(inputs)
	return zh_post_video_play_title(inputs)
});