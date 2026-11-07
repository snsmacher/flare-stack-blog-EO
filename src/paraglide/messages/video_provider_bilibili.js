/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Video_Provider_BilibiliInputs */

const zh_video_provider_bilibili = /** @type {(inputs: Video_Provider_BilibiliInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`哔哩哔哩`)
};

const en_video_provider_bilibili = /** @type {(inputs: Video_Provider_BilibiliInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bilibili`)
};

/**
* | output |
* | --- |
* | "Bilibili" |
*
* @param {Video_Provider_BilibiliInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const video_provider_bilibili = /** @type {((inputs?: Video_Provider_BilibiliInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Video_Provider_BilibiliInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_video_provider_bilibili(inputs)
	return zh_video_provider_bilibili(inputs)
});