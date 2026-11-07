/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Slash_Bullet_ListInputs */

const zh_editor_slash_bullet_list = /** @type {(inputs: Editor_Slash_Bullet_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无序列表`)
};

const en_editor_slash_bullet_list = /** @type {(inputs: Editor_Slash_Bullet_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bulleted list`)
};

/**
* | output |
* | --- |
* | "Bulleted list" |
*
* @param {Editor_Slash_Bullet_ListInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_slash_bullet_list = /** @type {((inputs?: Editor_Slash_Bullet_ListInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Slash_Bullet_ListInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_slash_bullet_list(inputs)
	return zh_editor_slash_bullet_list(inputs)
});