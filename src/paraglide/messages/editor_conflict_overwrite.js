/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Conflict_OverwriteInputs */

const zh_editor_conflict_overwrite = /** @type {(inputs: Editor_Conflict_OverwriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`以当前内容覆盖`)
};

const en_editor_conflict_overwrite = /** @type {(inputs: Editor_Conflict_OverwriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Overwrite with mine`)
};

/**
* | output |
* | --- |
* | "Overwrite with mine" |
*
* @param {Editor_Conflict_OverwriteInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_conflict_overwrite = /** @type {((inputs?: Editor_Conflict_OverwriteInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Conflict_OverwriteInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_conflict_overwrite(inputs)
	return zh_editor_conflict_overwrite(inputs)
});