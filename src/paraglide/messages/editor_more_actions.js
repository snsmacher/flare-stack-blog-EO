/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_More_ActionsInputs */

const zh_editor_more_actions = /** @type {(inputs: Editor_More_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更多操作`)
};

const en_editor_more_actions = /** @type {(inputs: Editor_More_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`More actions`)
};

/**
* | output |
* | --- |
* | "More actions" |
*
* @param {Editor_More_ActionsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_more_actions = /** @type {((inputs?: Editor_More_ActionsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_More_ActionsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_more_actions(inputs)
	return zh_editor_more_actions(inputs)
});