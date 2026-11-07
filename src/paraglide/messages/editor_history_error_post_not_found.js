/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_History_Error_Post_Not_FoundInputs */

const zh_editor_history_error_post_not_found = /** @type {(inputs: Editor_History_Error_Post_Not_FoundInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文章已经不存在。`)
};

const en_editor_history_error_post_not_found = /** @type {(inputs: Editor_History_Error_Post_Not_FoundInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The post no longer exists.`)
};

/**
* | output |
* | --- |
* | "The post no longer exists." |
*
* @param {Editor_History_Error_Post_Not_FoundInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_history_error_post_not_found = /** @type {((inputs?: Editor_History_Error_Post_Not_FoundInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_History_Error_Post_Not_FoundInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_history_error_post_not_found(inputs)
	return zh_editor_history_error_post_not_found(inputs)
});