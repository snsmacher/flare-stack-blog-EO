/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Muted_Users_Unmute_MessageInputs */

const zh_muted_users_unmute_message = /** @type {(inputs: Muted_Users_Unmute_MessageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`解禁「${i?.name}」`)
};

const en_muted_users_unmute_message = /** @type {(inputs: Muted_Users_Unmute_MessageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Unmute “${i?.name}”`)
};

/**
* | output |
* | --- |
* | "Unmute “{name}”" |
*
* @param {Muted_Users_Unmute_MessageInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const muted_users_unmute_message = /** @type {((inputs: Muted_Users_Unmute_MessageInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Muted_Users_Unmute_MessageInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_muted_users_unmute_message(inputs)
	return zh_muted_users_unmute_message(inputs)
});