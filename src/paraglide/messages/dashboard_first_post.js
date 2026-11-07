/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_First_PostInputs */

const zh_dashboard_first_post = /** @type {(inputs: Dashboard_First_PostInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`从第一篇文章开始`)
};

const en_dashboard_first_post = /** @type {(inputs: Dashboard_First_PostInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Start with your first post`)
};

/**
* | output |
* | --- |
* | "Start with your first post" |
*
* @param {Dashboard_First_PostInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const dashboard_first_post = /** @type {((inputs?: Dashboard_First_PostInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_First_PostInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_first_post(inputs)
	return zh_dashboard_first_post(inputs)
});