/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_History_Reason_PublishInputs */

const zh_editor_history_reason_publish = /** @type {(inputs: Editor_History_Reason_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`发布`)
};

const en_editor_history_reason_publish = /** @type {(inputs: Editor_History_Reason_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Published`)
};

/**
* | output |
* | --- |
* | "Published" |
*
* @param {Editor_History_Reason_PublishInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_history_reason_publish = /** @type {((inputs?: Editor_History_Reason_PublishInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_History_Reason_PublishInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_history_reason_publish(inputs)
	return zh_editor_history_reason_publish(inputs)
});