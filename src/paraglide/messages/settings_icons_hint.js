/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Icons_HintInputs */

const zh_settings_icons_hint = /** @type {(inputs: Settings_Icons_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`用于浏览器标签页、移动端主屏幕及 PWA 应用的多尺寸图标。建议至少上传 SVG 或 ICO 格式的标签页图标。`)
};

const en_settings_icons_hint = /** @type {(inputs: Settings_Icons_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Multi-size icons for browser tabs, mobile home screens, and PWA shortcuts. Uploading an SVG or ICO favicon is recommended at minimum.`)
};

/**
* | output |
* | --- |
* | "Multi-size icons for browser tabs, mobile home screens, and PWA shortcuts. Uploading an SVG or ICO favicon is recommended at minimum." |
*
* @param {Settings_Icons_HintInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_icons_hint = /** @type {((inputs?: Settings_Icons_HintInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Icons_HintInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_icons_hint(inputs)
	return zh_settings_icons_hint(inputs)
});