/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Leave_TitleInputs */

const zh_editor_leave_title = /** @type {(inputs: Editor_Leave_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`离开页面？`)
};

const en_editor_leave_title = /** @type {(inputs: Editor_Leave_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leave Page?`)
};

/**
* | output |
* | --- |
* | "Leave Page?" |
*
* @param {Editor_Leave_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_leave_title = /** @type {((inputs?: Editor_Leave_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Leave_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_leave_title(inputs)
	return zh_editor_leave_title(inputs)
});