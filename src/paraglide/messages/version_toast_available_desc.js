/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ version: NonNullable<unknown> }} Version_Toast_Available_DescInputs */

const zh_version_toast_available_desc = /** @type {(inputs: Version_Toast_Available_DescInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.version} 已发布。`)
};

const en_version_toast_available_desc = /** @type {(inputs: Version_Toast_Available_DescInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.version} has been released.`)
};

/**
* | output |
* | --- |
* | "{version} has been released." |
*
* @param {Version_Toast_Available_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const version_toast_available_desc = /** @type {((inputs: Version_Toast_Available_DescInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Version_Toast_Available_DescInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_version_toast_available_desc(inputs)
	return zh_version_toast_available_desc(inputs)
});