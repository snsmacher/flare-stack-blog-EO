/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Media_View_GridInputs */

const zh_media_view_grid = /** @type {(inputs: Media_View_GridInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`网格`)
};

const en_media_view_grid = /** @type {(inputs: Media_View_GridInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Grid`)
};

/**
* | output |
* | --- |
* | "Grid" |
*
* @param {Media_View_GridInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const media_view_grid = /** @type {((inputs?: Media_View_GridInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Media_View_GridInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_media_view_grid(inputs)
	return zh_media_view_grid(inputs)
});