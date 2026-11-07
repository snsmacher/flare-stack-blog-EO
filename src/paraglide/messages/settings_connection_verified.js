/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Connection_VerifiedInputs */

const zh_settings_connection_verified = /** @type {(inputs: Settings_Connection_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`测试通过`)
};

const en_settings_connection_verified = /** @type {(inputs: Settings_Connection_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Test passed`)
};

/**
* | output |
* | --- |
* | "Test passed" |
*
* @param {Settings_Connection_VerifiedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_connection_verified = /** @type {((inputs?: Settings_Connection_VerifiedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Connection_VerifiedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_connection_verified(inputs)
	return zh_settings_connection_verified(inputs)
});