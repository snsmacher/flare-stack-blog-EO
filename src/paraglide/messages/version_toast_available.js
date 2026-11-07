/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Version_Toast_AvailableInputs */

const zh_version_toast_available = /** @type {(inputs: Version_Toast_AvailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`发现新版本`)
};

const en_version_toast_available = /** @type {(inputs: Version_Toast_AvailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New version available`)
};

/**
* | output |
* | --- |
* | "New version available" |
*
* @param {Version_Toast_AvailableInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const version_toast_available = /** @type {((inputs?: Version_Toast_AvailableInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Version_Toast_AvailableInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_version_toast_available(inputs)
	return zh_version_toast_available(inputs)
});