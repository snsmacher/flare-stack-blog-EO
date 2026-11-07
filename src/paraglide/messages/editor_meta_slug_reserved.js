/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Meta_Slug_ReservedInputs */

const zh_editor_meta_slug_reserved = /** @type {(inputs: Editor_Meta_Slug_ReservedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`pinned 和 popular 为公开接口的保留链接（不区分大小写），不可使用。更换前，链接不会保存。`)
};

const en_editor_meta_slug_reserved = /** @type {(inputs: Editor_Meta_Slug_ReservedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The public API keeps pinned and popular (in any case) for itself. Choose another link to save it.`)
};

/**
* | output |
* | --- |
* | "The public API keeps pinned and popular (in any case) for itself. Choose another link to save it." |
*
* @param {Editor_Meta_Slug_ReservedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_meta_slug_reserved = /** @type {((inputs?: Editor_Meta_Slug_ReservedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Meta_Slug_ReservedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_meta_slug_reserved(inputs)
	return zh_editor_meta_slug_reserved(inputs)
});