/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Conflict_Load_LatestInputs */

const zh_editor_conflict_load_latest = /** @type {(inputs: Editor_Conflict_Load_LatestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`载入最新版本`)
};

const en_editor_conflict_load_latest = /** @type {(inputs: Editor_Conflict_Load_LatestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Load latest version`)
};

/**
* | output |
* | --- |
* | "Load latest version" |
*
* @param {Editor_Conflict_Load_LatestInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_conflict_load_latest = /** @type {((inputs?: Editor_Conflict_Load_LatestInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Conflict_Load_LatestInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_conflict_load_latest(inputs)
	return zh_editor_conflict_load_latest(inputs)
});