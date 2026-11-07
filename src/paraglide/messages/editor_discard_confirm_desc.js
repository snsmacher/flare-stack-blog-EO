/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Discard_Confirm_DescInputs */

const zh_editor_discard_confirm_desc = /** @type {(inputs: Editor_Discard_Confirm_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`当前草稿会先保存为一个新版本，再还原为已发布的版本，标题、摘要、链接、正文、发布日期、封面、分类和标签都会一并还原。已发布页面不受影响。`)
};

const en_editor_discard_confirm_desc = /** @type {(inputs: Editor_Discard_Confirm_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The draft goes back to the published version: title, summary, link, content, date, cover, category and tags. What you have now is saved to Versions first, so you can restore it later. The public page is not affected.`)
};

/**
* | output |
* | --- |
* | "The draft goes back to the published version: title, summary, link, content, date, cover, category and tags. What you have now is saved to Versions first, so..." |
*
* @param {Editor_Discard_Confirm_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_discard_confirm_desc = /** @type {((inputs?: Editor_Discard_Confirm_DescInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Discard_Confirm_DescInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_discard_confirm_desc(inputs)
	return zh_editor_discard_confirm_desc(inputs)
});