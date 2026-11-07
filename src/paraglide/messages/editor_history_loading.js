/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_History_LoadingInputs */

const zh_editor_history_loading = /** @type {(inputs: Editor_History_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在加载历史记录...`)
};

const en_editor_history_loading = /** @type {(inputs: Editor_History_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loading history...`)
};

/**
* | output |
* | --- |
* | "Loading history..." |
*
* @param {Editor_History_LoadingInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_history_loading = /** @type {((inputs?: Editor_History_LoadingInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_History_LoadingInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_history_loading(inputs)
	return zh_editor_history_loading(inputs)
});