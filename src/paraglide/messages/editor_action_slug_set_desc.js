/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ slug: NonNullable<unknown> }} Editor_Action_Slug_Set_DescInputs */

const zh_editor_action_slug_set_desc = /** @type {(inputs: Editor_Action_Slug_Set_DescInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`URL slug 已设置为 "${i?.slug}"`)
};

const en_editor_action_slug_set_desc = /** @type {(inputs: Editor_Action_Slug_Set_DescInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`URL slug set to "${i?.slug}"`)
};

/**
* | slug | output |
* | --- | --- |
* | * | "URL slug set to \"{slug}\"" |
*
* @param {Editor_Action_Slug_Set_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_action_slug_set_desc = /** @type {((inputs: Editor_Action_Slug_Set_DescInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Action_Slug_Set_DescInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_action_slug_set_desc(inputs)
	return zh_editor_action_slug_set_desc(inputs)
});