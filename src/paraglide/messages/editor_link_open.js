/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Link_OpenInputs */

const zh_editor_link_open = /** @type {(inputs: Editor_Link_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在新标签页打开`)
};

const en_editor_link_open = /** @type {(inputs: Editor_Link_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open in new tab`)
};

/**
* | output |
* | --- |
* | "Open in new tab" |
*
* @param {Editor_Link_OpenInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_link_open = /** @type {((inputs?: Editor_Link_OpenInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Link_OpenInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_link_open(inputs)
	return zh_editor_link_open(inputs)
});