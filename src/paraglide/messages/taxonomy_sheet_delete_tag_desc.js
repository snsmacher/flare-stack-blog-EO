/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown>, count: NonNullable<unknown>, published: NonNullable<unknown> }} Taxonomy_Sheet_Delete_Tag_DescInputs */

const zh_taxonomy_sheet_delete_tag_desc = /** @type {(inputs: Taxonomy_Sheet_Delete_Tag_DescInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`确定删除标签「${i?.name}」吗？共 ${i?.count} 篇文章使用此标签，其中 ${i?.published} 篇已发布文章的页面将立即移除该标签。`)
};

const en_taxonomy_sheet_delete_tag_desc = /** @type {(inputs: Taxonomy_Sheet_Delete_Tag_DescInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Delete the tag “${i?.name}”? ${i?.count} posts will lose this tag, and ${i?.published} of them are published, so they lose it on the public site right away.`)
};

/**
* | output |
* | --- |
* | "Delete the tag “{name}”? {count} posts will lose this tag, and {published} of them are published, so they lose it on the public site right away." |
*
* @param {Taxonomy_Sheet_Delete_Tag_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const taxonomy_sheet_delete_tag_desc = /** @type {((inputs: Taxonomy_Sheet_Delete_Tag_DescInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Taxonomy_Sheet_Delete_Tag_DescInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_taxonomy_sheet_delete_tag_desc(inputs)
	return zh_taxonomy_sheet_delete_tag_desc(inputs)
});