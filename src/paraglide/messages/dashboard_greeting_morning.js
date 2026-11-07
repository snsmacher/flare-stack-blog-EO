/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Dashboard_Greeting_MorningInputs */

const zh_dashboard_greeting_morning = /** @type {(inputs: Dashboard_Greeting_MorningInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`上午好，${i?.name}`)
};

const en_dashboard_greeting_morning = /** @type {(inputs: Dashboard_Greeting_MorningInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Good morning, ${i?.name}`)
};

/**
* | output |
* | --- |
* | "Good morning, {name}" |
*
* @param {Dashboard_Greeting_MorningInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const dashboard_greeting_morning = /** @type {((inputs: Dashboard_Greeting_MorningInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Greeting_MorningInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_greeting_morning(inputs)
	return zh_dashboard_greeting_morning(inputs)
});