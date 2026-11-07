/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Comments_More_ActionsInputs */

const zh_comments_more_actions = /** @type {(inputs: Comments_More_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`评论管理操作`)
};

const en_comments_more_actions = /** @type {(inputs: Comments_More_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comment actions`)
};

/**
* | output |
* | --- |
* | "Comment actions" |
*
* @param {Comments_More_ActionsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const comments_more_actions = /** @type {((inputs?: Comments_More_ActionsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Comments_More_ActionsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_comments_more_actions(inputs)
	return zh_comments_more_actions(inputs)
});