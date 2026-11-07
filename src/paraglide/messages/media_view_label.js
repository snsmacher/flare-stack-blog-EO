/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Media_View_LabelInputs */

const zh_media_view_label = /** @type {(inputs: Media_View_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`显示方式`)
};

const en_media_view_label = /** @type {(inputs: Media_View_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`View`)
};

/**
* | output |
* | --- |
* | "View" |
*
* @param {Media_View_LabelInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const media_view_label = /** @type {((inputs?: Media_View_LabelInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Media_View_LabelInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_media_view_label(inputs)
	return zh_media_view_label(inputs)
});