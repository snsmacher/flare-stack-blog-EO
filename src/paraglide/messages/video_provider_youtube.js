/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Video_Provider_YoutubeInputs */

const zh_video_provider_youtube = /** @type {(inputs: Video_Provider_YoutubeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`YouTube`)
};

const en_video_provider_youtube = /** @type {(inputs: Video_Provider_YoutubeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`YouTube`)
};

/**
* | output |
* | --- |
* | "YouTube" |
*
* @param {Video_Provider_YoutubeInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const video_provider_youtube = /** @type {((inputs?: Video_Provider_YoutubeInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Video_Provider_YoutubeInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_video_provider_youtube(inputs)
	return zh_video_provider_youtube(inputs)
});