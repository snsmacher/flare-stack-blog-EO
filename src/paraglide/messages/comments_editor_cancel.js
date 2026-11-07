/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Comments_Editor_CancelInputs */

const zh_comments_editor_cancel = /** @type {(inputs: Comments_Editor_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`取消`)
};

const en_comments_editor_cancel = /** @type {(inputs: Comments_Editor_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancel`)
};

/**
* | output |
* | --- |
* | "Cancel" |
*
* @param {Comments_Editor_CancelInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const comments_editor_cancel = /** @type {((inputs?: Comments_Editor_CancelInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Comments_Editor_CancelInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_comments_editor_cancel(inputs)
	return zh_comments_editor_cancel(inputs)
});