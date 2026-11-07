/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Settings_Api_Keys_Delete_DescInputs */

const zh_settings_api_keys_delete_desc = /** @type {(inputs: Settings_Api_Keys_Delete_DescInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`删除后，名称为「${i?.name}」的密钥将立即失效。`)
};

const en_settings_api_keys_delete_desc = /** @type {(inputs: Settings_Api_Keys_Delete_DescInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`The key named “${i?.name}” will stop working immediately.`)
};

/**
* | output |
* | --- |
* | "The key named “{name}” will stop working immediately." |
*
* @param {Settings_Api_Keys_Delete_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_api_keys_delete_desc = /** @type {((inputs: Settings_Api_Keys_Delete_DescInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Api_Keys_Delete_DescInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_api_keys_delete_desc(inputs)
	return zh_settings_api_keys_delete_desc(inputs)
});