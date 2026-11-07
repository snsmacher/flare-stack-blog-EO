/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Muted_Users_TitleInputs */

const zh_muted_users_title = /** @type {(inputs: Muted_Users_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`禁言名单`)
};

const en_muted_users_title = /** @type {(inputs: Muted_Users_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Muted users`)
};

/**
* | output |
* | --- |
* | "Muted users" |
*
* @param {Muted_Users_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const muted_users_title = /** @type {((inputs?: Muted_Users_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Muted_Users_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_muted_users_title(inputs)
	return zh_muted_users_title(inputs)
});