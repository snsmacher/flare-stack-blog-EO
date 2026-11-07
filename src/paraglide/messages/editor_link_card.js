/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Link_CardInputs */

const zh_editor_link_card = /** @type {(inputs: Editor_Link_CardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`链接`)
};

const en_editor_link_card = /** @type {(inputs: Editor_Link_CardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link`)
};

/**
* | output |
* | --- |
* | "Link" |
*
* @param {Editor_Link_CardInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_link_card = /** @type {((inputs?: Editor_Link_CardInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Link_CardInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_link_card(inputs)
	return zh_editor_link_card(inputs)
});