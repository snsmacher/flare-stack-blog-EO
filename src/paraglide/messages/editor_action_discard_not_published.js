/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Action_Discard_Not_PublishedInputs */

const zh_editor_action_discard_not_published = /** @type {(inputs: Editor_Action_Discard_Not_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此文章尚未发布，没有可还原的已发布版本。`)
};

const en_editor_action_discard_not_published = /** @type {(inputs: Editor_Action_Discard_Not_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This post is not published, so there is no published version to go back to.`)
};

/**
* | output |
* | --- |
* | "This post is not published, so there is no published version to go back to." |
*
* @param {Editor_Action_Discard_Not_PublishedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_action_discard_not_published = /** @type {((inputs?: Editor_Action_Discard_Not_PublishedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Action_Discard_Not_PublishedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_action_discard_not_published(inputs)
	return zh_editor_action_discard_not_published(inputs)
});