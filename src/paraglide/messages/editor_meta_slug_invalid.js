/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Meta_Slug_InvalidInputs */

const zh_editor_meta_slug_invalid = /** @type {(inputs: Editor_Meta_Slug_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`链接不能为空，且不能包含空格及 / ? # % \\ ^ 等字符。修正前，链接不会保存。`)
};

const en_editor_meta_slug_invalid = /** @type {(inputs: Editor_Meta_Slug_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The link can't be empty or contain spaces or characters like / ? # % \\ ^. It isn't saved until it's fixed.`)
};

/**
* | output |
* | --- |
* | "The link can't be empty or contain spaces or characters like / ? # % \\ ^. It isn't saved until it's fixed." |
*
* @param {Editor_Meta_Slug_InvalidInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_meta_slug_invalid = /** @type {((inputs?: Editor_Meta_Slug_InvalidInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Meta_Slug_InvalidInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_meta_slug_invalid(inputs)
	return zh_editor_meta_slug_invalid(inputs)
});