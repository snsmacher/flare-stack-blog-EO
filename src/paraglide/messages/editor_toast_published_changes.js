/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Toast_Published_ChangesInputs */

const zh_editor_toast_published_changes = /** @type {(inputs: Editor_Toast_Published_ChangesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`修改已发布`)
};

const en_editor_toast_published_changes = /** @type {(inputs: Editor_Toast_Published_ChangesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Changes published`)
};

/**
* | output |
* | --- |
* | "Changes published" |
*
* @param {Editor_Toast_Published_ChangesInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_toast_published_changes = /** @type {((inputs?: Editor_Toast_Published_ChangesInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Toast_Published_ChangesInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_toast_published_changes(inputs)
	return zh_editor_toast_published_changes(inputs)
});