/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Conflict_TitleInputs */

const zh_editor_conflict_title = /** @type {(inputs: Editor_Conflict_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此文章已在其他位置被修改`)
};

const en_editor_conflict_title = /** @type {(inputs: Editor_Conflict_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This post was changed somewhere else`)
};

/**
* | output |
* | --- |
* | "This post was changed somewhere else" |
*
* @param {Editor_Conflict_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_conflict_title = /** @type {((inputs?: Editor_Conflict_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Conflict_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_conflict_title(inputs)
	return zh_editor_conflict_title(inputs)
});