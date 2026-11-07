/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Media_Unused_ConfirmInputs */

const zh_media_unused_confirm = /** @type {(inputs: Media_Unused_ConfirmInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`确定删除这 ${i?.count} 张未被文章引用的图片吗？此操作无法撤销。`)
};

const en_media_unused_confirm = /** @type {(inputs: Media_Unused_ConfirmInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Delete these ${i?.count} images without post references? This cannot be undone.`)
};

/**
* | output |
* | --- |
* | "Delete these {count} images without post references? This cannot be undone." |
*
* @param {Media_Unused_ConfirmInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const media_unused_confirm = /** @type {((inputs: Media_Unused_ConfirmInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Media_Unused_ConfirmInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_media_unused_confirm(inputs)
	return zh_media_unused_confirm(inputs)
});