/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Unpublish_Confirm_TitleInputs */

const zh_editor_unpublish_confirm_title = /** @type {(inputs: Editor_Unpublish_Confirm_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`取消发布文章`)
};

const en_editor_unpublish_confirm_title = /** @type {(inputs: Editor_Unpublish_Confirm_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unpublish post`)
};

/**
* | output |
* | --- |
* | "Unpublish post" |
*
* @param {Editor_Unpublish_Confirm_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_unpublish_confirm_title = /** @type {((inputs?: Editor_Unpublish_Confirm_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Unpublish_Confirm_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_unpublish_confirm_title(inputs)
	return zh_editor_unpublish_confirm_title(inputs)
});