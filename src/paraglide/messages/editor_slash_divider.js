/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Slash_DividerInputs */

const zh_editor_slash_divider = /** @type {(inputs: Editor_Slash_DividerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`分隔线`)
};

const en_editor_slash_divider = /** @type {(inputs: Editor_Slash_DividerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Divider`)
};

/**
* | output |
* | --- |
* | "Divider" |
*
* @param {Editor_Slash_DividerInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_slash_divider = /** @type {((inputs?: Editor_Slash_DividerInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Slash_DividerInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_slash_divider(inputs)
	return zh_editor_slash_divider(inputs)
});