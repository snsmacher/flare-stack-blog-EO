/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ year: NonNullable<unknown>, author: NonNullable<unknown> }} Footer_CopyrightInputs */

const zh_footer_copyright = /** @type {(inputs: Footer_CopyrightInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`© ${i?.year} ${i?.author}. All Rights Reserved.`)
};

const en_footer_copyright = /** @type {(inputs: Footer_CopyrightInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`© ${i?.year} ${i?.author}. All Rights Reserved.`)
};

/**
* | output |
* | --- |
* | "© {year} {author}. All Rights Reserved." |
*
* @param {Footer_CopyrightInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const footer_copyright = /** @type {((inputs: Footer_CopyrightInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Footer_CopyrightInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_footer_copyright(inputs)
	return zh_footer_copyright(inputs)
});