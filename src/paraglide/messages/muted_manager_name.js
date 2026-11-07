/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Muted_Manager_NameInputs */

const zh_muted_manager_name = /** @type {(inputs: Muted_Manager_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`用户名`)
};

const en_muted_manager_name = /** @type {(inputs: Muted_Manager_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Username`)
};

/**
* | output |
* | --- |
* | "Username" |
*
* @param {Muted_Manager_NameInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const muted_manager_name = /** @type {((inputs?: Muted_Manager_NameInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Muted_Manager_NameInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_muted_manager_name(inputs)
	return zh_muted_manager_name(inputs)
});