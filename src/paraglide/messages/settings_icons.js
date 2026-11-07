/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_IconsInputs */

const zh_settings_icons = /** @type {(inputs: Settings_IconsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`网站图标与应用图标`)
};

const en_settings_icons = /** @type {(inputs: Settings_IconsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Site & App Icons`)
};

/**
* | output |
* | --- |
* | "Site & App Icons" |
*
* @param {Settings_IconsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_icons = /** @type {((inputs?: Settings_IconsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_IconsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_icons(inputs)
	return zh_settings_icons(inputs)
});