/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Error_Back_DashboardInputs */

const zh_error_back_dashboard = /** @type {(inputs: Error_Back_DashboardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`返回概览`)
};

const en_error_back_dashboard = /** @type {(inputs: Error_Back_DashboardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Back to overview`)
};

/**
* | output |
* | --- |
* | "Back to overview" |
*
* @param {Error_Back_DashboardInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const error_back_dashboard = /** @type {((inputs?: Error_Back_DashboardInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Error_Back_DashboardInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_error_back_dashboard(inputs)
	return zh_error_back_dashboard(inputs)
});