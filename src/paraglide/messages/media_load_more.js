/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Media_Load_MoreInputs */

const zh_media_load_more = /** @type {(inputs: Media_Load_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`加载更多`)
};

const en_media_load_more = /** @type {(inputs: Media_Load_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Load more`)
};

/**
* | output |
* | --- |
* | "Load more" |
*
* @param {Media_Load_MoreInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const media_load_more = /** @type {((inputs?: Media_Load_MoreInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Media_Load_MoreInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_media_load_more(inputs)
	return zh_media_load_more(inputs)
});