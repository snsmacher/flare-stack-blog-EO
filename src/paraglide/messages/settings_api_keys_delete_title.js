/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Api_Keys_Delete_TitleInputs */

const zh_settings_api_keys_delete_title = /** @type {(inputs: Settings_Api_Keys_Delete_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除 API Key`)
};

const en_settings_api_keys_delete_title = /** @type {(inputs: Settings_Api_Keys_Delete_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete API Key`)
};

/**
* | output |
* | --- |
* | "Delete API Key" |
*
* @param {Settings_Api_Keys_Delete_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_api_keys_delete_title = /** @type {((inputs?: Settings_Api_Keys_Delete_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Api_Keys_Delete_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_api_keys_delete_title(inputs)
	return zh_settings_api_keys_delete_title(inputs)
});