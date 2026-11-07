/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Meta_Auto_GenerateInputs */

const zh_editor_meta_auto_generate = /** @type {(inputs: Editor_Meta_Auto_GenerateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自动生成`)
};

const en_editor_meta_auto_generate = /** @type {(inputs: Editor_Meta_Auto_GenerateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Auto-gen`)
};

/**
* | output |
* | --- |
* | "Auto-gen" |
*
* @param {Editor_Meta_Auto_GenerateInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_meta_auto_generate = /** @type {((inputs?: Editor_Meta_Auto_GenerateInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Meta_Auto_GenerateInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_meta_auto_generate(inputs)
	return zh_editor_meta_auto_generate(inputs)
});