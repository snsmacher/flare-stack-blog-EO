/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Slash_MermaidInputs */

const zh_editor_slash_mermaid = /** @type {(inputs: Editor_Slash_MermaidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mermaid 图表`)
};

const en_editor_slash_mermaid = /** @type {(inputs: Editor_Slash_MermaidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mermaid diagram`)
};

/**
* | output |
* | --- |
* | "Mermaid diagram" |
*
* @param {Editor_Slash_MermaidInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_slash_mermaid = /** @type {((inputs?: Editor_Slash_MermaidInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Slash_MermaidInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_slash_mermaid(inputs)
	return zh_editor_slash_mermaid(inputs)
});