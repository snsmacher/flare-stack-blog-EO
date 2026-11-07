/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Media_Grid_LoadingInputs */

const zh_media_grid_loading = /** @type {(inputs: Media_Grid_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`加载中...`)
};

const en_media_grid_loading = /** @type {(inputs: Media_Grid_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loading...`)
};

/**
* | output |
* | --- |
* | "Loading..." |
*
* @param {Media_Grid_LoadingInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const media_grid_loading = /** @type {((inputs?: Media_Grid_LoadingInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Media_Grid_LoadingInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_media_grid_loading(inputs)
	return zh_media_grid_loading(inputs)
});