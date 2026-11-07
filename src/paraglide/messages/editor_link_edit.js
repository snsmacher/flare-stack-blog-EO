/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Link_EditInputs */

const zh_editor_link_edit = /** @type {(inputs: Editor_Link_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`编辑链接`)
};

const en_editor_link_edit = /** @type {(inputs: Editor_Link_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edit link`)
};

/**
* | output |
* | --- |
* | "Edit link" |
*
* @param {Editor_Link_EditInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_link_edit = /** @type {((inputs?: Editor_Link_EditInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Link_EditInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_link_edit(inputs)
	return zh_editor_link_edit(inputs)
});