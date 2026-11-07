/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Version_Action_IgnoreInputs */

const zh_version_action_ignore = /** @type {(inputs: Version_Action_IgnoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`忽略`)
};

const en_version_action_ignore = /** @type {(inputs: Version_Action_IgnoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ignore`)
};

/**
* | output |
* | --- |
* | "Ignore" |
*
* @param {Version_Action_IgnoreInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const version_action_ignore = /** @type {((inputs?: Version_Action_IgnoreInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Version_Action_IgnoreInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_version_action_ignore(inputs)
	return zh_version_action_ignore(inputs)
});