/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown>, count: NonNullable<unknown> }} Taxonomy_Sheet_Delete_Category_Desc_Draft_OnlyInputs */

const zh_taxonomy_sheet_delete_category_desc_draft_only = /** @type {(inputs: Taxonomy_Sheet_Delete_Category_Desc_Draft_OnlyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`确定删除分类「${i?.name}」吗？共 ${i?.count} 篇文章使用此分类，已发布页面不受影响。`)
};

const en_taxonomy_sheet_delete_category_desc_draft_only = /** @type {(inputs: Taxonomy_Sheet_Delete_Category_Desc_Draft_OnlyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Delete the category “${i?.name}”? ${i?.count} posts will lose this category. No published post is affected.`)
};

/**
* | output |
* | --- |
* | "Delete the category “{name}”? {count} posts will lose this category. No published post is affected." |
*
* @param {Taxonomy_Sheet_Delete_Category_Desc_Draft_OnlyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const taxonomy_sheet_delete_category_desc_draft_only = /** @type {((inputs: Taxonomy_Sheet_Delete_Category_Desc_Draft_OnlyInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Taxonomy_Sheet_Delete_Category_Desc_Draft_OnlyInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_taxonomy_sheet_delete_category_desc_draft_only(inputs)
	return zh_taxonomy_sheet_delete_category_desc_draft_only(inputs)
});