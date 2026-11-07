/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Widget_MoreInputs */

const zh_widget_more = /** @type {(inputs: Widget_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更多`)
};

const en_widget_more = /** @type {(inputs: Widget_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`More`)
};

/**
* | output |
* | --- |
* | "More" |
*
* @param {Widget_MoreInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const widget_more = /** @type {((inputs?: Widget_MoreInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Widget_MoreInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_widget_more(inputs)
	return zh_widget_more(inputs)
});