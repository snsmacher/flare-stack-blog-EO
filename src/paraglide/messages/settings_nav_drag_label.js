/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Settings_Nav_Drag_LabelInputs */

const zh_settings_nav_drag_label = /** @type {(inputs: Settings_Nav_Drag_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`调整 ${i?.name} 的顺序`)
};

const en_settings_nav_drag_label = /** @type {(inputs: Settings_Nav_Drag_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Reorder ${i?.name}`)
};

/**
* | output |
* | --- |
* | "Reorder {name}" |
*
* @param {Settings_Nav_Drag_LabelInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_nav_drag_label = /** @type {((inputs: Settings_Nav_Drag_LabelInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Nav_Drag_LabelInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_nav_drag_label(inputs)
	return zh_settings_nav_drag_label(inputs)
});