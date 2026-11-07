/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Muted_Manager_Unmute_NamedInputs */

const zh_muted_manager_unmute_named = /** @type {(inputs: Muted_Manager_Unmute_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`解除 ${i?.name} 的禁言`)
};

const en_muted_manager_unmute_named = /** @type {(inputs: Muted_Manager_Unmute_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Unmute ${i?.name}`)
};

/**
* | output |
* | --- |
* | "Unmute {name}" |
*
* @param {Muted_Manager_Unmute_NamedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const muted_manager_unmute_named = /** @type {((inputs: Muted_Manager_Unmute_NamedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Muted_Manager_Unmute_NamedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_muted_manager_unmute_named(inputs)
	return zh_muted_manager_unmute_named(inputs)
});