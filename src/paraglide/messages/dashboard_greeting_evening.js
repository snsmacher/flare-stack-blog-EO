/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Dashboard_Greeting_EveningInputs */

const zh_dashboard_greeting_evening = /** @type {(inputs: Dashboard_Greeting_EveningInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`晚上好，${i?.name}`)
};

const en_dashboard_greeting_evening = /** @type {(inputs: Dashboard_Greeting_EveningInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Good evening, ${i?.name}`)
};

/**
* | output |
* | --- |
* | "Good evening, {name}" |
*
* @param {Dashboard_Greeting_EveningInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const dashboard_greeting_evening = /** @type {((inputs: Dashboard_Greeting_EveningInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Greeting_EveningInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_greeting_evening(inputs)
	return zh_dashboard_greeting_evening(inputs)
});