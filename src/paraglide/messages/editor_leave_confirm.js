/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Leave_ConfirmInputs */

const zh_editor_leave_confirm = /** @type {(inputs: Editor_Leave_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`确认离开`)
};

const en_editor_leave_confirm = /** @type {(inputs: Editor_Leave_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirm Leave`)
};

/**
* | output |
* | --- |
* | "Confirm Leave" |
*
* @param {Editor_Leave_ConfirmInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_leave_confirm = /** @type {((inputs?: Editor_Leave_ConfirmInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Leave_ConfirmInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_leave_confirm(inputs)
	return zh_editor_leave_confirm(inputs)
});