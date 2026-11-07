/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Muted_Users_UnmuteInputs */

const zh_muted_users_unmute = /** @type {(inputs: Muted_Users_UnmuteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`解禁`)
};

const en_muted_users_unmute = /** @type {(inputs: Muted_Users_UnmuteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unmute`)
};

/**
* | output |
* | --- |
* | "Unmute" |
*
* @param {Muted_Users_UnmuteInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const muted_users_unmute = /** @type {((inputs?: Muted_Users_UnmuteInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Muted_Users_UnmuteInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_muted_users_unmute(inputs)
	return zh_muted_users_unmute(inputs)
});