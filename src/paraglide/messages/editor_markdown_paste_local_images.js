/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Editor_Markdown_Paste_Local_ImagesInputs */

const zh_editor_markdown_paste_local_images = /** @type {(inputs: Editor_Markdown_Paste_Local_ImagesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} 张本地图片无法随粘贴导入，请手动上传`)
};

const en_editor_markdown_paste_local_images = /** @type {(inputs: Editor_Markdown_Paste_Local_ImagesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} local images could not be pasted. Upload them manually.`)
};

/**
* | output |
* | --- |
* | "{count} local images could not be pasted. Upload them manually." |
*
* @param {Editor_Markdown_Paste_Local_ImagesInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_markdown_paste_local_images = /** @type {((inputs: Editor_Markdown_Paste_Local_ImagesInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Markdown_Paste_Local_ImagesInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_markdown_paste_local_images(inputs)
	return zh_editor_markdown_paste_local_images(inputs)
});