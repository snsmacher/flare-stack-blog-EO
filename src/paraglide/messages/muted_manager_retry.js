/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Muted_Manager_RetryInputs */

const zh_muted_manager_retry = /** @type {(inputs: Muted_Manager_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重新加载`)
};

const en_muted_manager_retry = /** @type {(inputs: Muted_Manager_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Try again`)
};

/**
* | output |
* | --- |
* | "Try again" |
*
* @param {Muted_Manager_RetryInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const muted_manager_retry = /** @type {((inputs?: Muted_Manager_RetryInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Muted_Manager_RetryInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_muted_manager_retry(inputs)
	return zh_muted_manager_retry(inputs)
});