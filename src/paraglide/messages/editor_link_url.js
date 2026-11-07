/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Link_UrlInputs */

const zh_editor_link_url = /** @type {(inputs: Editor_Link_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`链接地址`)
};

const en_editor_link_url = /** @type {(inputs: Editor_Link_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link URL`)
};

/**
* | output |
* | --- |
* | "Link URL" |
*
* @param {Editor_Link_UrlInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_link_url = /** @type {((inputs?: Editor_Link_UrlInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Link_UrlInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_link_url(inputs)
	return zh_editor_link_url(inputs)
});