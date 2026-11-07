/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ date: NonNullable<unknown> }} Muted_Users_Muted_AtInputs */

const zh_muted_users_muted_at = /** @type {(inputs: Muted_Users_Muted_AtInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`禁言于 ${i?.date}`)
};

const en_muted_users_muted_at = /** @type {(inputs: Muted_Users_Muted_AtInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Muted ${i?.date}`)
};

/**
* | output |
* | --- |
* | "Muted {date}" |
*
* @param {Muted_Users_Muted_AtInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const muted_users_muted_at = /** @type {((inputs: Muted_Users_Muted_AtInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Muted_Users_Muted_AtInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_muted_users_muted_at(inputs)
	return zh_muted_users_muted_at(inputs)
});