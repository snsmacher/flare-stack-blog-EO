/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ provider: NonNullable<unknown> }} Post_Video_PlayerInputs */

const zh_post_video_player = /** @type {(inputs: Post_Video_PlayerInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.provider}视频播放器`)
};

const en_post_video_player = /** @type {(inputs: Post_Video_PlayerInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.provider} video player`)
};

/**
* | output |
* | --- |
* | "{provider} video player" |
*
* @param {Post_Video_PlayerInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const post_video_player = /** @type {((inputs: Post_Video_PlayerInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Post_Video_PlayerInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_post_video_player(inputs)
	return zh_post_video_player(inputs)
});