/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Toast_PublishedInputs */

const zh_editor_toast_published = /** @type {(inputs: Editor_Toast_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文章已发布`)
};

const en_editor_toast_published = /** @type {(inputs: Editor_Toast_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Post published`)
};

/**
* | output |
* | --- |
* | "Post published" |
*
* @param {Editor_Toast_PublishedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_toast_published = /** @type {((inputs?: Editor_Toast_PublishedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Toast_PublishedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_toast_published(inputs)
	return zh_editor_toast_published(inputs)
});