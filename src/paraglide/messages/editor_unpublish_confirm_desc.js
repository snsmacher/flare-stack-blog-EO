/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Unpublish_Confirm_DescInputs */

const zh_editor_unpublish_confirm_desc = /** @type {(inputs: Editor_Unpublish_Confirm_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`取消发布后，已发布页面将立即下线，文章恢复为草稿。重新发布后页面恢复，链接和发布日期保持不变。`)
};

const en_editor_unpublish_confirm_desc = /** @type {(inputs: Editor_Unpublish_Confirm_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The public page disappears immediately and the post becomes a draft. Publish it again to restore it with the same link and publication date.`)
};

/**
* | output |
* | --- |
* | "The public page disappears immediately and the post becomes a draft. Publish it again to restore it with the same link and publication date." |
*
* @param {Editor_Unpublish_Confirm_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_unpublish_confirm_desc = /** @type {((inputs?: Editor_Unpublish_Confirm_DescInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Unpublish_Confirm_DescInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_unpublish_confirm_desc(inputs)
	return zh_editor_unpublish_confirm_desc(inputs)
});