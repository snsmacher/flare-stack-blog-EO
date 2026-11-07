/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Design_Secret_RemovedInputs */

const zh_settings_design_secret_removed = /** @type {(inputs: Settings_Design_Secret_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存后将移除凭据`)
};

const en_settings_design_secret_removed = /** @type {(inputs: Settings_Design_Secret_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This credential will be removed when you save`)
};

/**
* | output |
* | --- |
* | "This credential will be removed when you save" |
*
* @param {Settings_Design_Secret_RemovedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_design_secret_removed = /** @type {((inputs?: Settings_Design_Secret_RemovedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Design_Secret_RemovedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_design_secret_removed(inputs)
	return zh_settings_design_secret_removed(inputs)
});