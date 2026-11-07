/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Link_RemoveInputs */

const zh_editor_link_remove = /** @type {(inputs: Editor_Link_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`移除链接`)
};

const en_editor_link_remove = /** @type {(inputs: Editor_Link_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remove link`)
};

/**
* | output |
* | --- |
* | "Remove link" |
*
* @param {Editor_Link_RemoveInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_link_remove = /** @type {((inputs?: Editor_Link_RemoveInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Link_RemoveInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_link_remove(inputs)
	return zh_editor_link_remove(inputs)
});