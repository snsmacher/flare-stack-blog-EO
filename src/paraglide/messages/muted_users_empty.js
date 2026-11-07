/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Muted_Users_EmptyInputs */

const zh_muted_users_empty = /** @type {(inputs: Muted_Users_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有被禁言的用户`)
};

const en_muted_users_empty = /** @type {(inputs: Muted_Users_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No one is muted`)
};

/**
* | output |
* | --- |
* | "No one is muted" |
*
* @param {Muted_Users_EmptyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const muted_users_empty = /** @type {((inputs?: Muted_Users_EmptyInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Muted_Users_EmptyInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_muted_users_empty(inputs)
	return zh_muted_users_empty(inputs)
});