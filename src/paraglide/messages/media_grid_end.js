/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Media_Grid_EndInputs */

const zh_media_grid_end = /** @type {(inputs: Media_Grid_EndInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已加载全部`)
};

const en_media_grid_end = /** @type {(inputs: Media_Grid_EndInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`End of list`)
};

/**
* | output |
* | --- |
* | "End of list" |
*
* @param {Media_Grid_EndInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const media_grid_end = /** @type {((inputs?: Media_Grid_EndInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Media_Grid_EndInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_media_grid_end(inputs)
	return zh_media_grid_end(inputs)
});