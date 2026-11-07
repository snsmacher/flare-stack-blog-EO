/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Action_Discard_Slug_TakenInputs */

const zh_editor_action_discard_slug_taken = /** @type {(inputs: Editor_Action_Discard_Slug_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已发布版本的链接已被另一篇文章使用，无法放弃修改。需先修改另一篇文章的链接。`)
};

const en_editor_action_discard_slug_taken = /** @type {(inputs: Editor_Action_Discard_Slug_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Another post now uses the published link, so the changes cannot be discarded. Change that post's link first.`)
};

/**
* | output |
* | --- |
* | "Another post now uses the published link, so the changes cannot be discarded. Change that post's link first." |
*
* @param {Editor_Action_Discard_Slug_TakenInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_action_discard_slug_taken = /** @type {((inputs?: Editor_Action_Discard_Slug_TakenInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Action_Discard_Slug_TakenInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_action_discard_slug_taken(inputs)
	return zh_editor_action_discard_slug_taken(inputs)
});