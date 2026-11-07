/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Dashboard_Greeting_AfternoonInputs */

const zh_dashboard_greeting_afternoon = /** @type {(inputs: Dashboard_Greeting_AfternoonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`下午好，${i?.name}`)
};

const en_dashboard_greeting_afternoon = /** @type {(inputs: Dashboard_Greeting_AfternoonInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Good afternoon, ${i?.name}`)
};

/**
* | output |
* | --- |
* | "Good afternoon, {name}" |
*
* @param {Dashboard_Greeting_AfternoonInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const dashboard_greeting_afternoon = /** @type {((inputs: Dashboard_Greeting_AfternoonInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Greeting_AfternoonInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_greeting_afternoon(inputs)
	return zh_dashboard_greeting_afternoon(inputs)
});