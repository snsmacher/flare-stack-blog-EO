/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Site_Field_Apple_Touch_IconInputs */

const zh_settings_site_field_apple_touch_icon = /** @type {(inputs: Settings_Site_Field_Apple_Touch_IconInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`iOS 主屏幕图标`)
};

const en_settings_site_field_apple_touch_icon = /** @type {(inputs: Settings_Site_Field_Apple_Touch_IconInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apple Touch Icon`)
};

/**
* | output |
* | --- |
* | "Apple Touch Icon" |
*
* @param {Settings_Site_Field_Apple_Touch_IconInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_site_field_apple_touch_icon = /** @type {((inputs?: Settings_Site_Field_Apple_Touch_IconInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Site_Field_Apple_Touch_IconInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_site_field_apple_touch_icon(inputs)
	return zh_settings_site_field_apple_touch_icon(inputs)
});