/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Toast_UnpublishedInputs */

const zh_editor_toast_unpublished = /** @type {(inputs: Editor_Toast_UnpublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文章已取消发布`)
};

const en_editor_toast_unpublished = /** @type {(inputs: Editor_Toast_UnpublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Post unpublished`)
};

/**
* | output |
* | --- |
* | "Post unpublished" |
*
* @param {Editor_Toast_UnpublishedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_toast_unpublished = /** @type {((inputs?: Editor_Toast_UnpublishedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Toast_UnpublishedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_toast_unpublished(inputs)
	return zh_editor_toast_unpublished(inputs)
});