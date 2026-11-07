/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ title: NonNullable<unknown> }} Post_Video_Play_Direct_TitleInputs */

const zh_post_video_play_direct_title = /** @type {(inputs: Post_Video_Play_Direct_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`播放视频：${i?.title}`)
};

const en_post_video_play_direct_title = /** @type {(inputs: Post_Video_Play_Direct_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Play video: ${i?.title}`)
};

/**
* | output |
* | --- |
* | "Play video: {title}" |
*
* @param {Post_Video_Play_Direct_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const post_video_play_direct_title = /** @type {((inputs: Post_Video_Play_Direct_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Post_Video_Play_Direct_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_post_video_play_direct_title(inputs)
	return zh_post_video_play_direct_title(inputs)
});