/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tags_TitleInputs */

const zh_tags_title = /** @type {(inputs: Tags_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`标签`)
};

const en_tags_title = /** @type {(inputs: Tags_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tags`)
};

/**
* | output |
* | --- |
* | "Tags" |
*
* @param {Tags_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const tags_title = /** @type {((inputs?: Tags_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tags_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_tags_title(inputs)
	return zh_tags_title(inputs)
});