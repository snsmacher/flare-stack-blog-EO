/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Action_Title_EmptyInputs */

const zh_editor_action_title_empty = /** @type {(inputs: Editor_Action_Title_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`标题不能为空`)
};

const en_editor_action_title_empty = /** @type {(inputs: Editor_Action_Title_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Title cannot be empty`)
};

/**
* | output |
* | --- |
* | "Title cannot be empty" |
*
* @param {Editor_Action_Title_EmptyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_action_title_empty = /** @type {((inputs?: Editor_Action_Title_EmptyInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Action_Title_EmptyInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_action_title_empty(inputs)
	return zh_editor_action_title_empty(inputs)
});