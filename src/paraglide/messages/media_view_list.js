/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Media_View_ListInputs */

const zh_media_view_list = /** @type {(inputs: Media_View_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`清单`)
};

const en_media_view_list = /** @type {(inputs: Media_View_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`List`)
};

/**
* | output |
* | --- |
* | "List" |
*
* @param {Media_View_ListInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const media_view_list = /** @type {((inputs?: Media_View_ListInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Media_View_ListInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_media_view_list(inputs)
	return zh_media_view_list(inputs)
});