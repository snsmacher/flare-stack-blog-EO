/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Media_Filter_LabelInputs */

const zh_media_filter_label = /** @type {(inputs: Media_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`筛选媒体`)
};

const en_media_filter_label = /** @type {(inputs: Media_Filter_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filter media`)
};

/**
* | output |
* | --- |
* | "Filter media" |
*
* @param {Media_Filter_LabelInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const media_filter_label = /** @type {((inputs?: Media_Filter_LabelInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Media_Filter_LabelInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_media_filter_label(inputs)
	return zh_media_filter_label(inputs)
});