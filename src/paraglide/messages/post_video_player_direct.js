/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Post_Video_Player_DirectInputs */

const zh_post_video_player_direct = /** @type {(inputs: Post_Video_Player_DirectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`视频播放器`)
};

const en_post_video_player_direct = /** @type {(inputs: Post_Video_Player_DirectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Video player`)
};

/**
* | output |
* | --- |
* | "Video player" |
*
* @param {Post_Video_Player_DirectInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const post_video_player_direct = /** @type {((inputs?: Post_Video_Player_DirectInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Post_Video_Player_DirectInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_post_video_player_direct(inputs)
	return zh_post_video_player_direct(inputs)
});