/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Post_Video_Play_DirectInputs */

const zh_post_video_play_direct = /** @type {(inputs: Post_Video_Play_DirectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`播放视频`)
};

const en_post_video_play_direct = /** @type {(inputs: Post_Video_Play_DirectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Play video`)
};

/**
* | output |
* | --- |
* | "Play video" |
*
* @param {Post_Video_Play_DirectInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const post_video_play_direct = /** @type {((inputs?: Post_Video_Play_DirectInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Post_Video_Play_DirectInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_post_video_play_direct(inputs)
	return zh_post_video_play_direct(inputs)
});