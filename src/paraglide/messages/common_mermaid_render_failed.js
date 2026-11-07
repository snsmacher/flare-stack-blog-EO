/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Mermaid_Render_FailedInputs */

const zh_common_mermaid_render_failed = /** @type {(inputs: Common_Mermaid_Render_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mermaid 图表渲染失败`)
};

const en_common_mermaid_render_failed = /** @type {(inputs: Common_Mermaid_Render_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mermaid diagram failed to render`)
};

/**
* | output |
* | --- |
* | "Mermaid diagram failed to render" |
*
* @param {Common_Mermaid_Render_FailedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const common_mermaid_render_failed = /** @type {((inputs?: Common_Mermaid_Render_FailedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Mermaid_Render_FailedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_common_mermaid_render_failed(inputs)
	return zh_common_mermaid_render_failed(inputs)
});